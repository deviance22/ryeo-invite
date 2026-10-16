import { useState } from "react";
import Modal from "./Modal.jsx";

// Each card shows a short teaser. Tapping it opens the details in a note.
const CARDS = [
    {
        id: "attire",
        title: "Beach Casual",
        teaser: "Tap the card for attire details.",
        hint: "tap to open ↷",
        modalTitle: "What to Wear",
        icon: (
            <svg viewBox="0 0 40 40" fill="none">
                                    <path
                                        d="M20 3C12 12 6 18 6 26a14 14 0 0028 0c0-8-6-14-14-23z"
                                        fill="#c9deed"
                                    />
                                </svg>
        ),
        body: (
            <>
                <p>
                    <strong>Ladies:</strong> Colorful floor-length beach dress
                    (patterns encouraged) with your favorite beach sandals.
                </p>
                <p>
                    <strong>Men:</strong> Colorful beach polo (patterns
                    encouraged) with pants or shorts and your favorite summer
                    shoes. No denim bottoms.
                </p>
                <p>*** Please avoid neutral colors, black, and white.</p>
            </>
        ),
    },
    {
        id: "location",
        title: "Location",
        teaser: "Orchard Hotel, Baguio City",
        hint: "tap for directions ↷",
        modalTitle: "Finding Us",
        icon: (
            <svg viewBox="0 0 40 40" fill="none">
                                    <rect
                                        x="8"
                                        y="14"
                                        width="24"
                                        height="20"
                                        rx="2"
                                        fill="#fcde85"
                                    />
                                    <path
                                        d="M8 14l4-8h16l4 8"
                                        fill="none"
                                        stroke="#606aad"
                                        strokeWidth="1.6"
                                    />
                                    <line
                                        x1="20"
                                        y1="14"
                                        x2="20"
                                        y2="34"
                                        stroke="#606aad"
                                        strokeWidth="1.4"
                                    />
                                </svg>
        ),
        body: (
            <>
                <p>
                    Ryeo's celebration will be held on the{" "}
                    <strong>6th Floor, Orchard Hotel</strong>, 53 Legarda Road,
                    Baguio City.
                </p>
                <p>
                    Parking is available at the hotel. Elevators are just past
                    the lobby, up to the 6th floor.
                </p>
                <a
                    className="map-link"
                    href="https://www.google.com/maps/search/?api=1&query=Orchard%20Hotel%2C%2053%20Legarda%20Road%2C%20Baguio%20City"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open in Google Maps →
                </a>
            </>
        ),
    },
    // Snacks & Cake card was commented out in the HTML version.
    {
        id: "gifts",
        title: "Gifts are welcome",
        teaser: "Ryeo has a bank account! Tap the card to show QR code!",
        hint: "tap for QR code ↷",
        modalTitle: "A Gift for Ryeo",
        icon: (
            <svg viewBox="0 0 40 40" fill="none">
                                    <path
                                        d="M20 5l3.5 8.5L32 15l-6.5 6L27 30l-7-4-7 4 1.5-9L8 15l8.5-1.5z"
                                        fill="#606aad"
                                        opacity=".8"
                                    />
                                </svg>
        ),
        body: (
            <>
                <p>
                    Your presence means the world, but if you'd like to send a
                    little something, here's Ryeo's account:
                </p>
                <div className="qr-placeholder" aria-hidden="true">
                    <svg viewBox="0 0 100 100" width="140" height="140">
                                                    <rect width="100" height="100" fill="#fdfdfd"/>
                                                    <rect x="6" y="6" width="24" height="24" fill="none" stroke="#606aad" strokeWidth="5"/>
                                                    <rect x="14" y="14" width="8" height="8" fill="#606aad"/>
                                                    <rect x="70" y="6" width="24" height="24" fill="none" stroke="#606aad" strokeWidth="5"/>
                                                    <rect x="78" y="14" width="8" height="8" fill="#606aad"/>
                                                    <rect x="6" y="70" width="24" height="24" fill="none" stroke="#606aad" strokeWidth="5"/>
                                                    <rect x="14" y="78" width="8" height="8" fill="#606aad"/>
                                                    <rect x="40" y="10" width="6" height="6" fill="#606aad"/>
                                                    <rect x="52" y="10" width="6" height="6" fill="#606aad"/>
                                                    <rect x="40" y="24" width="6" height="6" fill="#606aad"/>
                                                    <rect x="60" y="40" width="6" height="6" fill="#606aad"/>
                                                    <rect x="40" y="46" width="6" height="6" fill="#606aad"/>
                                                    <rect x="52" y="52" width="6" height="6" fill="#606aad"/>
                                                    <rect x="66" y="60" width="6" height="6" fill="#606aad"/>
                                                    <rect x="78" y="46" width="6" height="6" fill="#606aad"/>
                                                    <rect x="40" y="66" width="6" height="6" fill="#606aad"/>
                                                    <rect x="52" y="78" width="6" height="6" fill="#606aad"/>
                                                    <rect x="70" y="78" width="16" height="16" fill="#606aad"/>
                                                </svg>
                </div>
                <p className="qr-note">
                    Placeholder graphic. Swap this for a real QR code image and
                    add your GCash or bank account name here.
                </p>
            </>
        ),
    },
];

export default function InfoSection() {
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const card = CARDS[selected];

    function openCard(i) {
        setSelected(i);
        setOpen(true);
    }

    return (
        <>
            <section className="info-section">
                <h2 className="script">The Details</h2>
                <div className="info-grid">
                    {CARDS.map((c, i) => (
                        <div
                            key={c.id}
                            className="info-card"
                            tabIndex={0}
                            role="button"
                            aria-haspopup="dialog"
                            onClick={() => openCard(i)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openCard(i);
                                }
                            }}
                        >
                            {c.icon}
                            <h3 className="serif">{c.title}</h3>
                            <p>{c.teaser}</p>
                            <span className="tap-hint">{c.hint}</span>
                        </div>
                    ))}
                </div>
            </section>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                labelledBy="cardModalTitle"
            >
                <h3 className="script" id="cardModalTitle">
                    {card.modalTitle}
                </h3>
                <div className="card-modal-body">{card.body}</div>
            </Modal>
        </>
    );
}
