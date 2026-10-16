import { useState } from "react";

function Placeholder({ n }) {
    return (
        <svg viewBox="0 0 100 100" role="img" aria-label={`Photo ${n} placeholder`}>
            <rect width="100" height="100" fill="#c9deed" />
            <circle
                cx="70"
                cy="30"
                r="12"
                fill="#fcde85"
                stroke="#f6cc50"
                strokeWidth="2"
            />
            <path
                d="M0,72 Q12,62 25,72 T50,72 T75,72 T100,72 V100 H0 Z"
                fill="#fdfdfd"
                opacity=".75"
            />
            <path
                d="M0,82 Q12,74 25,82 T50,82 T75,82 T100,82 V100 H0 Z"
                fill="#606aad"
                opacity=".35"
            />
            <text
                x="50"
                y="52"
                textAnchor="middle"
                fontFamily="Caveat, cursive"
                fontSize="22"
                fill="#606aad"
            >
                {n}
            </text>
        </svg>
    );
}

// Shows the photo, or a placeholder tile when there is no file yet.
export default function PhotoMedia({ photo, n, lazy = false }) {
    const [failed, setFailed] = useState(false);
    if (!photo.src || failed) return <Placeholder n={n} />;
    return (
        <img
            src={photo.src}
            alt={photo.alt || ""}
            decoding="async"
            loading={lazy ? "lazy" : undefined}
            onError={() => setFailed(true)}
        />
    );
}
