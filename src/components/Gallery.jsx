import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import PhotoMedia from "./PhotoMedia.jsx";
import PHOTOS from "../data/photos.js";

const TOTAL = PHOTOS.length;

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const show = (i) => setIndex((i + TOTAL) % TOTAL);
    const photo = PHOTOS[index];

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + TOTAL) % TOTAL);
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % TOTAL);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            <section className="gallery-section" id="gallery">
                <svg
                    className="gallery-edge"
                    viewBox="0 0 1440 40"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0,0 H1440 V20 Q1350,60 1260,20 T1080,20 T900,20 T720,20 T540,20 T360,20 T180,20 T0,20 Z"
                        fill="#c9deed"
                    />
                </svg>
                <div className="gallery-inner">
                    <h2 className="script">Little Moments</h2>
                    <p className="gallery-sub">
                        A peek at Ryeo's first year, one snapshot at a time.
                    </p>
                    <div className="gallery-grid">
                        {PHOTOS.map((p, i) => (
                            <button
                                key={p.src}
                                type="button"
                                className="photo"
                                aria-label={`Open photo ${i + 1} of ${TOTAL}`}
                                onClick={() => {
                                    show(i);
                                    setOpen(true);
                                }}
                            >
                                <span className="photo-img">
                                    <PhotoMedia photo={p} n={i + 1} lazy />
                                </span>
                                {p.caption && (
                                    <span className="photo-cap">{p.caption}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                cardClassName="photo-frame"
                label="Photo viewer"
            >
                <div className="photo-stage">
                    <PhotoMedia key={photo.src} photo={photo} n={index + 1} />
                </div>
                <p className="photo-caption">{photo.caption}</p>
                <div className="photo-nav">
                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={() => show(index - 1)}
                    >
                        ←
                    </button>
                    <span className="photo-count">
                        {index + 1} / {TOTAL}
                    </span>
                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={() => show(index + 1)}
                    >
                        →
                    </button>
                </div>
            </Modal>
        </>
    );
}
