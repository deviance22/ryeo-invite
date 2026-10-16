export default function Hero() {
    return (
        <section className="hero">
            <div
                style={{ position: "absolute", top: "6%", left: "5%", width: "64px" }}
            >
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    style={{ width: "100%", display: "block" }}
                >
                    <path
                        d="M32 6 C40 20 46 24 58 26 C46 30 40 36 34 50 C30 36 22 30 8 28 C22 24 28 18 32 6Z"
                        fill="#f6cc50"
                    />
                </svg>
            </div>
            <div
                style={{ position: "absolute", top: "14%", right: "7%", width: "46px" }}
            >
                <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    style={{ width: "100%", display: "block" }}
                >
                    <path
                        d="M20 3 L23 15 L20 20 L17 15 Z"
                        fill="#606aad"
                        opacity=".55"
                    />
                    <path
                        d="M20 37 L23 25 L20 20 L17 25 Z"
                        fill="#606aad"
                        opacity=".55"
                    />
                    <path
                        d="M3 20 L15 17 L20 20 L15 23 Z"
                        fill="#606aad"
                        opacity=".55"
                    />
                    <path
                        d="M37 20 L25 17 L20 20 L25 23 Z"
                        fill="#606aad"
                        opacity=".55"
                    />
                    <path
                        d="M8 8 L17 14 L20 20 L14 17 Z"
                        fill="#606aad"
                        opacity=".7"
                    />
                    <path
                        d="M32 8 L23 14 L20 20 L26 17 Z"
                        fill="#606aad"
                        opacity=".7"
                    />
                    <path
                        d="M8 32 L17 26 L20 20 L14 23 Z"
                        fill="#606aad"
                        opacity=".7"
                    />
                    <path
                        d="M32 32 L23 26 L20 20 L26 23 Z"
                        fill="#606aad"
                        opacity=".7"
                    />
                </svg>
            </div>
            <div
                style={{ position: "absolute", bottom: "26%", left: "3%", width: "52px" }}
            >
                <svg
                    viewBox="0 0 50 50"
                    fill="none"
                    style={{ width: "100%", display: "block" }}
                >
                    <path
                        d="M25 4C25 4 8 16 8 30a17 17 0 0034 0C42 16 25 4 25 4z"
                        fill="none"
                        stroke="#c9deed"
                        strokeWidth="3"
                    />
                    <path
                        d="M25 12v28M18 20c2 4 2 8 0 12M32 20c-2 4-2 8 0 12"
                        stroke="#c9deed"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div
                style={{ position: "absolute", bottom: "30%", right: "4%", width: "58px" }}
            >
                <svg
                    viewBox="0 0 58 58"
                    fill="none"
                    style={{ width: "100%", display: "block" }}
                >
                    <path
                        d="M6 30c0-13 10-24 23-24s23 11 23 24c0 4-3 6-6 6H12c-3 0-6-2-6-6z"
                        fill="#fcde85"
                    />
                    <path
                        d="M6 30h46"
                        stroke="#606aad"
                        strokeWidth="1.5"
                        opacity=".4"
                    />
                    <path
                        d="M14 30c2-6 6-10 10-10M44 30c-2-6-6-10-10-10"
                        stroke="#606aad"
                        strokeWidth="1.5"
                        opacity=".4"
                        fill="none"
                    />
                </svg>
            </div>

            {/* surfboards */}
            <div
                style={{ position: "absolute", bottom: "-4%", left: "-3%", width: "150px" }}
            >
                <svg
                    viewBox="0 0 90 300"
                    fill="none"
                    style={{ width: "100%", display: "block", transform: "rotate(-16deg)" }}
                >
                    <path
                        d="M45 2C20 60 12 150 20 230c3 28 12 50 25 66 13-16 22-38 25-66 8-80 0-170-25-228z"
                        fill="#c9deed"
                        stroke="#606aad"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M45 30v240"
                        stroke="#606aad"
                        strokeWidth="2"
                        opacity=".5"
                    />
                    <path
                        d="M27 90h36M24 150h42M27 210h36"
                        stroke="#f6cc50"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div
                style={{ position: "absolute", bottom: "-6%", right: "-2%", width: "110px" }}
            >
                <svg
                    viewBox="0 0 90 300"
                    fill="none"
                    style={{ width: "100%", display: "block", transform: "rotate(13deg)" }}
                >
                    <path
                        d="M45 2C20 60 12 150 20 230c3 28 12 50 25 66 13-16 22-38 25-66 8-80 0-170-25-228z"
                        fill="#f6cc50"
                        stroke="#606aad"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M45 30v240"
                        stroke="#606aad"
                        strokeWidth="2"
                        opacity=".5"
                    />
                    <path
                        d="M22 120c8-8 38-8 46 0M22 190c8-8 38-8 46 0"
                        stroke="#fdfdfd"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>

            <div
                style={{ position: "absolute", top: "32%", left: "2%", width: "56px", opacity: "0.65" }}
            >
                <svg
                    viewBox="0 0 90 300"
                    fill="none"
                    style={{ width: "100%", display: "block", transform: "rotate(-25deg)" }}
                >
                    <path
                        d="M45 2C20 60 12 150 20 230c3 28 12 50 25 66 13-16 22-38 25-66 8-80 0-170-25-228z"
                        fill="#fcde85"
                        stroke="#606aad"
                        strokeWidth="3"
                    />
                    <path
                        d="M45 30v240"
                        stroke="#606aad"
                        strokeWidth="2"
                        opacity=".5"
                    />
                </svg>
            </div>

            <div
                style={{ position: "relative" }}
            >
                <div className="sun-wrap">
                    <svg viewBox="0 0 120 120" width="120" height="120">
                        <g
                            stroke="#f6cc50"
                            strokeWidth="5"
                            strokeLinecap="round"
                        >
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
                </div>
            </div>

            <h1 className="headline script">
                Ryeo Cesno's First Wave
                <span className="name">It's a Beach Day!</span>
            </h1>
            <p className="subhead">
                Sandy toes, salty air &amp; one very big first birthday. Come
                make waves with us.
            </p>

            <div className="detail-strip">
                <div className="detail">
                    <svg viewBox="0 0 24 24" fill="none">
                        <rect
                            x="3"
                            y="5"
                            width="18"
                            height="16"
                            rx="3"
                            stroke="#606aad"
                            strokeWidth="1.6"
                        />
                        <line
                            x1="3"
                            y1="10"
                            x2="21"
                            y2="10"
                            stroke="#606aad"
                            strokeWidth="1.6"
                        />
                        <line
                            x1="8"
                            y1="2.5"
                            x2="8"
                            y2="6.5"
                            stroke="#606aad"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                        <line
                            x1="16"
                            y1="2.5"
                            x2="16"
                            y2="6.5"
                            stroke="#606aad"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span><span className="label">Date</span>November 14</span>
                </div>
                <div className="detail">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="#606aad"
                            strokeWidth="1.6"
                        />
                        <path
                            d="M12 7v5l3.5 2"
                            stroke="#606aad"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span><span className="label">Time</span>2:30 PM</span>
                </div>
                <div className="detail">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
                            stroke="#606aad"
                            strokeWidth="1.6"
                        />
                        <circle
                            cx="12"
                            cy="9"
                            r="2.4"
                            stroke="#606aad"
                            strokeWidth="1.6"
                        />
                    </svg>
                    <span
                        ><span className="label">Where</span>That Little Cafe</span
                    >
                </div>
            </div>

            <div
                className="wave-parallax"
                style={{ marginTop: "auto", position: "relative", width: "calc(200% + 12vw)", marginLeft: "-6vw", height: "110px", overflow: "hidden" }}
            >
                <svg
                    className="wave-divider wave-back"
                    viewBox="0 0 2880 140"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,90 Q180,40 360,90 T720,90 T1080,90 T1440,90 L1440,140 L0,140 Z"
                        fill="#c9deed"
                        opacity="0.35"
                    />
                    <path
                        d="M0,90 Q180,40 360,90 T720,90 T1080,90 T1440,90 L1440,140 L0,140 Z"
                        fill="#c9deed"
                        opacity="0.35"
                        transform="translate(1440,0)"
                    />
                </svg>
                <svg
                    className="wave-divider wave-front"
                    viewBox="0 0 2880 140"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,75 Q120,115 240,75 T480,75 T720,75 T960,75 T1200,75 T1440,75 L1440,140 L0,140 Z"
                        fill="#c9deed"
                        opacity="0.65"
                    />
                    <path
                        d="M0,75 Q120,115 240,75 T480,75 T720,75 T960,75 T1200,75 T1440,75 L1440,140 L0,140 Z"
                        fill="#c9deed"
                        opacity="0.65"
                        transform="translate(1440,0)"
                    />
                </svg>
            </div>
        </section>
    );
}
