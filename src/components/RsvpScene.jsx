import { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";
import RsvpForm from "./RsvpForm.jsx";

// Time the cork-pop animation gets before the note opens (matches the CSS).
const UNCORK_MS = 480;

export default function RsvpScene() {
    const [uncorking, setUncorking] = useState(false);
    const [open, setOpen] = useState(false);
    const timer = useRef(null);

    useEffect(() => () => clearTimeout(timer.current), []);

    function uncork() {
        if (uncorking) return;
        setUncorking(true);
        timer.current = setTimeout(() => setOpen(true), UNCORK_MS);
    }

    function close() {
        setOpen(false);
        setUncorking(false);
    }

    return (
        <>
            <section className="rsvp-scene" id="rsvp">
                <h2 className="script">Send Us Word</h2>
                <p className="instruction">
                    Tap the bottle to open your invitation &amp; RSVP
                </p>

                <div className="bottle-stage">
                    <button
                        className={`bottle-btn${uncorking ? " uncorking" : ""}`}
                        disabled={uncorking}
                        onClick={uncork}
                        aria-label="Open the message in a bottle to RSVP"
                    >
                        <svg
                            width="130"
                            height="220"
                            viewBox="0 0 130 220"
                            fill="none"
                        >
                            {/* cork */}
                            <g id="cork">
                                <rect
                                    x="52"
                                    y="6"
                                    width="26"
                                    height="22"
                                    rx="4"
                                    fill="#f6cc50"
                                    stroke="#c99a2e"
                                    strokeWidth="1.5"
                                />
                                <line
                                    x1="52"
                                    y1="15"
                                    x2="78"
                                    y2="15"
                                    stroke="#c99a2e"
                                    strokeWidth="1"
                                />
                            </g>
                            {/* bottle body */}
                            <path
                                d="M50 26h30v18c14 8 22 22 22 42v88c0 14-11 24-24 24H52c-13 0-24-10-24-24v-88c0-20 8-34 22-42V26z"
                                fill="#c9deed"
                                fillOpacity="0.35"
                                stroke="#606aad"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                            />
                            {/* rolled note inside */}
                            <rect
                                x="47"
                                y="70"
                                width="36"
                                height="70"
                                rx="6"
                                fill="#fffef8"
                                stroke="#e7dcb8"
                                strokeWidth="1.5"
                                transform="rotate(-4 65 105)"
                            />
                            <line
                                x1="53"
                                y1="86"
                                x2="77"
                                y2="83"
                                stroke="#c9deed"
                                strokeWidth="2"
                                transform="rotate(-4 65 105)"
                            />
                            <line
                                x1="53"
                                y1="96"
                                x2="77"
                                y2="93"
                                stroke="#c9deed"
                                strokeWidth="2"
                                transform="rotate(-4 65 105)"
                            />
                            <line
                                x1="53"
                                y1="106"
                                x2="72"
                                y2="104"
                                stroke="#c9deed"
                                strokeWidth="2"
                                transform="rotate(-4 65 105)"
                            />
                            {/* glass shine */}
                            <path
                                d="M40 90c0-16 5-26 12-32"
                                stroke="#ffffff"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity=".5"
                            />
                        </svg>
                    </button>
                </div>

                <span className="bottle-hint">tap to uncork</span>

                <div className="waterline">
                    <svg
                        className="wl-back"
                        viewBox="0 0 2880 170"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,120 Q180,70 360,120 T720,120 T1080,120 T1440,120 L1440,170 L0,170 Z"
                            fill="#a9c8e3"
                            opacity="0.6"
                        />
                        <path
                            d="M0,120 Q180,70 360,120 T720,120 T1080,120 T1440,120 L1440,170 L0,170 Z"
                            fill="#a9c8e3"
                            opacity="0.6"
                            transform="translate(1440,0)"
                        />
                    </svg>
                    <svg
                        className="wl-front"
                        viewBox="0 0 2880 170"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,100 Q120,145 240,100 T480,100 T720,100 T960,100 T1200,100 T1440,100 L1440,170 L0,170 Z"
                            fill="#c9deed"
                        />
                        <path
                            d="M0,100 Q120,145 240,100 T480,100 T720,100 T960,100 T1200,100 T1440,100 L1440,170 L0,170 Z"
                            fill="#c9deed"
                            transform="translate(1440,0)"
                        />
                    </svg>
                </div>
            </section>
            <Modal open={open} onClose={close} label="RSVP">
                <RsvpForm />
            </Modal>
        </>
    );
}
