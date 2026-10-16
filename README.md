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
    RsvpForm.jsx           the note inside the bottle (find name → group reply)
    GuestSearch.jsx        name lookup against the guest list
    Modal.jsx              shared overlay and paper note
    PhotoMedia.jsx         photo with placeholder fallback
    Footer.jsx
  data/photos.js           the 15 gallery photos
  data/guests.js           the guest list, grouped (edit GROUPS)
  lib/submitRsvp.js        reads and saves replies via the Google Sheet
apps-script/Code.gs        the script that runs inside the Google Sheet
public/photos/             put your photos here
public/gift-qr.png         the InstaPay QR in the Gifts card
```

## Things to do before sharing

1. **Photos.** Add `photo-01.jpg` to `photo-15.jpg` in `public/photos/`, or
   change the names (and add captions) in `src/data/photos.js`. Missing files
   show a placeholder tile.
2. **Guest list.** Replace the sample groups in `src/data/guests.js`.
3. **RSVP replies.** Connect the Google Sheet (below). Until then replies are
   only kept in the browser they were sent from.
4. **Event details.** The hero still says "November 14, 2:30 PM, That Little
   Cafe", while the Location card says Orchard Hotel, and the RSVP note still
   mentions Kai, Aug 24 and Sunset Cove Beach. Make these match in
   `Hero.jsx`, `InfoSection.jsx` and `RsvpForm.jsx`.

## How the RSVP works

Guests type their name and pick it from the list, which shows their group.
They mark Yes or Can't for each person in the group, add an optional note and
send it. A group that already replied sees its saved answers filled in and can
change them and send again; the newest answer replaces the old one. There is
no login, so anyone who knows a name on the list can answer for that group.

Replies go to a Google Sheet you own:

- **Replies** tab: one row per guest with their latest answer.
- **Log** tab: every submission ever sent, so earlier answers are kept.

Open the sheet any time, or use File → Download → CSV.

### Connecting the Google Sheet (one time, about 5 minutes)

1. Create a new Google Sheet.
2. In it, open **Extensions → Apps Script**, delete the sample code, paste in
   all of `apps-script/Code.gs`, and save.
3. Click **Deploy → New deployment**, choose type **Web app**, set
   *Execute as* to **Me** and *Who has access* to **Anyone**, then
   **Deploy**. Approve the permissions prompt (Google warns that the app is
   unverified, because it is your own script).
4. Copy the **Web app URL** (it ends in `/exec`) and create `.env.local` in
   this folder with:

   ```
   VITE_RSVP_URL=https://script.google.com/macros/s/…/exec
   ```

5. Rebuild (`npm run build`) and redeploy the site.

The Replies and Log tabs are created on the first reply. If you edit
`Code.gs` later, use **Deploy → Manage deployments → Edit → New version** so
the same URL serves the new code.

## Small changes from the HTML version

- Closed modals are hidden from keyboard tabbing, and focus returns to
  whatever opened them when they close.
- Page scroll lock is shared, so opening one modal after another behaves.
- The old unused parallax markup is gone.
