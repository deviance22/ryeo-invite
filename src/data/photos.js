// The gallery shows these 15 photos, in this order.
//
// Drop your pictures in public/photos and name them photo-01.jpg ...
// photo-15.jpg, or change the file names below. Add a short caption for any
// photo and it shows on the polaroid. A photo whose file is missing shows a
// placeholder tile instead of a broken image.
const base = import.meta.env.BASE_URL;

const PHOTOS = Array.from({ length: 15 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
        src: `${base}photos/photo-${n}.jpg`,
        alt: `Ryeo, photo ${i + 1}`,
        caption: "",
    };
});

export default PHOTOS;
