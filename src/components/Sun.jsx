// The hero's sun, also used as the RSVP loading icon.
export default function Sun({ size = 120 }) {
    return (
        <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
            <g stroke="#f6cc50" strokeWidth="5" strokeLinecap="round">
                <line x1="60" y1="2" x2="60" y2="18" />
                <line x1="60" y1="102" x2="60" y2="118" />
                <line x1="2" y1="60" x2="18" y2="60" />
                <line x1="102" y1="60" x2="118" y2="60" />
                <line x1="20" y1="20" x2="31" y2="31" />
                <line x1="89" y1="89" x2="100" y2="100" />
                <line x1="100" y1="20" x2="89" y2="31" />
                <line x1="31" y1="89" x2="20" y2="100" />
            </g>
            <circle cx="60" cy="60" r="30" fill="#fcde85" />
            <circle
                cx="60"
                cy="60"
                r="30"
                fill="none"
                stroke="#f6cc50"
                strokeWidth="3"
            />
        </svg>
    );
}
