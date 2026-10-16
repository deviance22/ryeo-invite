import { useEffect, useRef } from "react";
import Sun from "./Sun.jsx";

// Spinning sun shown in the RSVP note while it waits on the Google Sheet.
export default function SunLoader({ label }) {
    const ref = useRef(null);

    // The button that started this is gone, so keep focus inside the note.
    useEffect(() => {
        ref.current?.focus({ preventScroll: true });
    }, []);

    return (
        <div
            ref={ref}
            className="sun-loader"
            role="status"
            aria-live="polite"
            tabIndex={-1}
        >
            <div className="sun-loader-sun">
                <Sun size={96} />
            </div>
            <p>{label}</p>
        </div>
    );
}
