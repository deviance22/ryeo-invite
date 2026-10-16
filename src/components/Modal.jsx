import { useEffect, useRef } from "react";

// Several modals can be open in sequence, so the scroll lock is counted.
let lockCount = 0;

function useBodyScrollLock(active) {
    useEffect(() => {
        if (!active) return;
        lockCount += 1;
        document.body.style.overflow = "hidden";
        return () => {
            lockCount -= 1;
            if (lockCount === 0) document.body.style.overflow = "";
        };
    }, [active]);
}

/**
 * Shared overlay + paper note. Stays mounted so the CSS open/close
 * transitions play. Closes on backdrop click and Escape, locks page scroll,
 * moves focus to the close button and gives it back afterwards.
 */
export default function Modal({
    open,
    onClose,
    cardClassName = "note-card",
    label,
    labelledBy,
    children,
}) {
    const cardRef = useRef(null);
    const returnFocusTo = useRef(null);
    // Keep the latest onClose without re-running the open/close effect.
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useBodyScrollLock(open);

    useEffect(() => {
        if (!open) return;
        returnFocusTo.current = document.activeElement;
        cardRef.current?.querySelector(".note-close")?.focus();

        const onKey = (e) => {
            if (e.key === "Escape") onCloseRef.current();
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
            returnFocusTo.current?.focus?.();
        };
    }, [open]);

    return (
        <div
            className={`overlay${open ? " show" : ""}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                ref={cardRef}
                className={cardClassName}
                role="dialog"
                aria-modal="true"
                aria-label={label}
                aria-labelledby={labelledBy}
            >
                <button
                    className="note-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
