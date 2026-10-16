# Ryeo's First Birthday RSVP

The beach-themed invitation site, ported from a single HTML file to React
(Vite). The look, copy and animations are unchanged.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Where things live

```
src/
  App.jsx                  page order
  styles.css               all styling (same CSS as the HTML version)
  components/
    Hero.jsx               sun, surfboards, headline, date/time/place, waves
    InfoSection.jsx        the three detail cards and their notes (edit CARDS)
    Gallery.jsx            polaroid grid + photo viewer
    RsvpScene.jsx          the bottle and the waterline waves
    RsvpForm.jsx           the note inside the bottle
    Modal.jsx              shared overlay and paper note
    PhotoMedia.jsx         photo with placeholder fallback
    Footer.jsx
  data/photos.js           the 15 gallery photos
  lib/submitRsvp.js        where RSVP replies get sent (not wired yet)
public/photos/             put your photos here
```

## Things to do before sharing

1. **Photos.** Add `photo-01.jpg` to `photo-15.jpg` in `public/photos/`, or
   change the names (and add captions) in `src/data/photos.js`. Missing files
   show a placeholder tile.
2. **RSVP replies.** The form shows the thank-you message but does not store
   anything yet. Fill in `submitRsvp()` in `src/lib/submitRsvp.js` with your
   Google Form, Airtable, API or email service call.
3. **Event details.** The hero still says "November 14, 2:30 PM, That Little
   Cafe", while the Location card says Orchard Hotel, and the RSVP note still
   mentions Kai, Aug 24 and Sunset Cove Beach. Make these match in
   `Hero.jsx`, `InfoSection.jsx` and `RsvpForm.jsx`.
4. **Gift QR.** The QR in the Gifts card is a placeholder drawing. Replace it
   with a real QR image (put it in `public/` and use an `<img>`).

## Small changes from the HTML version

- Closed modals are hidden from keyboard tabbing, and focus returns to
  whatever opened them when they close.
- Page scroll lock is shared, so opening one modal after another behaves.
- The old unused parallax markup is gone.
