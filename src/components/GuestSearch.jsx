import { useId, useState } from "react";
import GROUPS from "../data/guests.js";

const normalize = (s) =>
    s
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim();

const GUESTS = GROUPS.flatMap((group) =>
    group.members.map((name) => ({
        name,
        group,
        words: normalize(name).split(/\s+/),
    })),
);

// Every typed word has to start one of the name's words.
function findGuests(query) {
    const typed = normalize(query).split(/\s+/).filter(Boolean);
    if (typed.join("").length < 2) return [];
    return GUESTS.filter((g) =>
        typed.every((t) => g.words.some((w) => w.startsWith(t))),
    ).slice(0, 8);
}

/** Name box that only accepts a name from the guest list. */
export default function GuestSearch({ onSelect }) {
    const id = useId();
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const [listOpen, setListOpen] = useState(false);

    const matches = findGuests(query);
    const showList = listOpen && matches.length > 0;
    const noMatch = query.trim().length >= 2 && matches.length === 0;

    function pick(guest) {
        setQuery(guest.name);
        setListOpen(false);
        onSelect(guest.name, guest.group);
    }

    function onKeyDown(e) {
        if (!matches.length) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setListOpen(true);
            setActive((i) => (i + 1) % matches.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => (i - 1 + matches.length) % matches.length);
        } else if (e.key === "Enter" && showList) {
            e.preventDefault();
            pick(matches[active]);
        } else if (e.key === "Escape" && showList) {
            // Close the list, not the whole note.
            e.stopPropagation();
            setListOpen(false);
        }
    }

    return (
        <div className="field guest-search">
            <label htmlFor={`${id}-input`}>Find your name</label>
            <input
                type="text"
                id={`${id}-input`}
                role="combobox"
                aria-expanded={showList}
                aria-controls={`${id}-list`}
                aria-autocomplete="list"
                aria-activedescendant={
                    showList ? `${id}-opt-${active}` : undefined
                }
                autoComplete="off"
                placeholder="Start typing your name…"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                    setListOpen(true);
                }}
                onFocus={() => setListOpen(true)}
                onBlur={() => setListOpen(false)}
                onKeyDown={onKeyDown}
            />
            <ul
                id={`${id}-list`}
                role="listbox"
                className="guest-options"
                hidden={!showList}
            >
                {matches.map((g, i) => (
                    <li
                        key={`${g.group.id}:${g.name}`}
                        id={`${id}-opt-${i}`}
                        role="option"
                        aria-selected={i === active}
                        className={`guest-option${i === active ? " active" : ""}`}
                        // mousedown so the input's blur doesn't close the list first
                        onMouseDown={(e) => {
                            e.preventDefault();
                            pick(g);
                        }}
                        onMouseEnter={() => setActive(i)}
                    >
                        <span>{g.name}</span>
                        <small>{g.group.name}</small>
                    </li>
                ))}
            </ul>
            {noMatch && (
                <p className="no-match" role="status">
                    We can't find that name. Try just your first or last
                    name, or message us and we'll add you.
                </p>
            )}
        </div>
    );
}
