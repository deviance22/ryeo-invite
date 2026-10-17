import { useEffect, useState } from "react";
import GuestSearch from "./GuestSearch.jsx";
import SunLoader from "./SunLoader.jsx";
import { fetchRsvp, submitRsvp } from "../lib/submitRsvp.js";

// Keep the loader up at least this long so a quick reply doesn't flash it.
const MIN_LOADING_MS = 700;

const atLeast = (promise) =>
    Promise.all([
        promise,
        new Promise((r) => setTimeout(r, MIN_LOADING_MS)),
    ]).then(([value]) => value);

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
    });

/**
 * Three steps: find your name, answer for each person in your group, then a
 * thank-you with a way back to change the answer. A group that replied
 * before sees its saved answers filled in.
 */
export default function RsvpForm() {
    const [guestName, setGuestName] = useState("");
    const [group, setGroup] = useState(null);
    const [answers, setAnswers] = useState({});
    const [message, setMessage] = useState("");
    const [savedAt, setSavedAt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    // Load any earlier reply for the chosen group.
    useEffect(() => {
        if (!group) return;
        let cancelled = false;
        setLoadError(false);
        atLeast(fetchRsvp(group.id))
            .then((saved) => {
                if (cancelled || !saved) return;
                const known = {};
                saved.members.forEach((m) => {
                    if (group.members.includes(m.name)) known[m.name] = m.attending;
                });
                setAnswers(known);
                setMessage(saved.message || "");
                setSavedAt(saved.updatedAt);
            })
            .catch(() => !cancelled && setLoadError(true))
            .finally(() => !cancelled && setLoading(false));
        return () => {
            cancelled = true;
        };
    }, [group]);

    function choose(name, g) {
        setGuestName(name);
        setGroup(g);
        // Set here, not in the effect, so the form never shows before the loader.
        setLoading(true);
        setAnswers({});
        setMessage("");
        setSavedAt(null);
        setError("");
    }

    function reset() {
        setGuestName("");
        setGroup(null);
        setSent(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        setError("");
        try {
            const { updatedAt } = await atLeast(submitRsvp({
                groupId: group.id,
                group: group.name,
                members: group.members.map((name) => ({
                    name,
                    attending: answers[name],
                })),
                message: message.trim(),
            }));
            setSavedAt(updatedAt);
            setSent(true);
        } catch {
            setError("That did not send. Please try again.");
        } finally {
            setSending(false);
        }
    }

    if (sent) {
        const coming = group.members.filter((n) => answers[n] === "yes");
        return (
            <div className="thankyou">
                <svg viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 5C12 14 6 20 6 28a14 14 0 0028 0c0-8-6-14-14-23z"
                        fill="#f6cc50"
                    />
                </svg>
                <h3 className="script">Message received!</h3>
                {coming.length ? (
                    <p>
                        {coming.length === group.members.length
                            ? "See you all"
                            : `See you, ${coming.join(" & ")}`}{" "}
                        on the sand 🐚
                    </p>
                ) : (
                    <p>We'll miss you! Thanks for letting us know 🐚</p>
                )}
                <button
                    type="button"
                    className="link-btn"
                    onClick={() => setSent(false)}
                >
                    Change my reply
                </button>
            </div>
        );
    }

    const allAnswered = group?.members.every((n) => answers[n]);

    return (
        <div>
            <h3 className="script">A note washed ashore</h3>
            <p className="note-sub">
                Ryeo's 1st Birthday · Nov 14 · That Little Cafe
            </p>

            {!group ? (
                <GuestSearch onSelect={choose} />
            ) : loading ? (
                <SunLoader label="Checking the tides for your reply…" />
            ) : sending ? (
                <SunLoader label="Sending your note out to sea…" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="group-head">
                        <span className="group-name">{group.name}</span>
                        <button
                            type="button"
                            className="link-btn"
                            onClick={reset}
                        >
                            Not you?
                        </button>
                    </div>

                    {savedAt && (
                        <p className="rsvp-status">
                            You replied on {formatDate(savedAt)}. Change
                            anything below and send it again.
                        </p>
                    )}
                    {loadError && (
                        <p className="rsvp-status">
                            We couldn't check for an earlier reply. Sending
                            now will replace it if there was one.
                        </p>
                    )}

                    <fieldset className="field member-list">
                        <legend>Who's coming?</legend>
                        {group.members.map((name) => (
                            <div className="member-row" key={name}>
                                <span className="member-name">
                                    {name}
                                    {name === guestName && (
                                        <small> (you)</small>
                                    )}
                                </span>
                                <div
                                    className="attend-toggle small"
                                    role="group"
                                    aria-label={`Is ${name} coming?`}
                                >
                                    {[
                                        ["yes", "Yes"],
                                        ["no", "Can't"],
                                    ].map(([value, label]) => (
                                        <button
                                            key={value}
                                            type="button"
                                            className={
                                                answers[name] === value
                                                    ? "active"
                                                    : ""
                                            }
                                            aria-pressed={answers[name] === value}
                                            onClick={() =>
                                                setAnswers((a) => ({
                                                    ...a,
                                                    [name]: value,
                                                }))
                                            }
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </fieldset>

                    <div className="field">
                        <label htmlFor="guestMsg">
                            A note for the birthday boy
                        </label>
                        <textarea
                            id="guestMsg"
                            placeholder="Happy 1st birthday, Ryeo! 🌊"
                            maxLength={1000}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    {error && (
                        <p className="note-sub" role="alert">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="send-btn"
                        disabled={!allAnswered}
                    >
                        {savedAt ? "Update my reply" : "Send it back to sea"}
                    </button>
                    {!allAnswered && (
                        <p className="rsvp-status">
                            Pick Yes or Can't for everyone to send.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}
