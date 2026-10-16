import { useState } from "react";
import { submitRsvp } from "../lib/submitRsvp.js";

export default function RsvpForm() {
    const [name, setName] = useState("");
    const [attending, setAttending] = useState("yes");
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        setError("");
        try {
            await submitRsvp({
                name: name.trim(),
                attending,
                guests: Number(guests) || 1,
                message: message.trim(),
            });
            setSent(true);
        } catch {
            setError("That did not send. Please try again.");
        } finally {
            setSending(false);
        }
    }

    if (sent) {
        return (
            <div className="thankyou">
                <svg viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 5C12 14 6 20 6 28a14 14 0 0028 0c0-8-6-14-14-23z"
                        fill="#f6cc50"
                    />
                </svg>
                <h3 className="script">Message received!</h3>
                <p>
                    Thanks for writing back, can't wait to see you on the sand
                    🐚
                </p>
            </div>
        );
    }

    return (
        <div>
            <h3 className="script">A note washed ashore</h3>
            <p className="note-sub">
                Ryeo's 1st Birthday · Nov 14 · That Little Cafe
            </p>

            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="guestName">Your name</label>
                    <input
                        type="text"
                        id="guestName"
                        required
                        placeholder="Who's coming?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label id="attendLabel">Will you be there?</label>
                    <div
                        className="attend-toggle"
                        role="group"
                        aria-labelledby="attendLabel"
                    >
                        <button
                            type="button"
                            className={`attend-opt${attending === "yes" ? " active" : ""}`}
                            aria-pressed={attending === "yes"}
                            onClick={() => setAttending("yes")}
                        >
                            Yes, I'll be there!
                        </button>
                        <button
                            type="button"
                            className={`attend-opt${attending === "no" ? " active" : ""}`}
                            aria-pressed={attending === "no"}
                            onClick={() => setAttending("no")}
                        >
                            Can't make it
                        </button>
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="guestCount">
                        Number of guests (incl. you)
                    </label>
                    <input
                        type="number"
                        id="guestCount"
                        min="1"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="guestMsg">A note for the birthday boy</label>
                    <textarea
                        id="guestMsg"
                        placeholder="Happy 1st birthday, Ryeo! 🌊"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                {error && (
                    <p className="note-sub" role="alert">
                        {error}
                    </p>
                )}

                <button type="submit" className="send-btn" disabled={sending}>
                    Send it back to sea
                </button>
            </form>
        </div>
    );
}
