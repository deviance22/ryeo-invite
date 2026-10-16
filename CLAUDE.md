# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page, beach-themed first-birthday invitation/RSVP site for Ryeo, built with React 18 + Vite 5. It was ported from a single HTML file, so the goal is to keep the look, copy and animations identical to that original. There is no backend, router, state library, TypeScript, linter or test suite.

## Commands

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run preview  # serve the built dist/
```

`vite.config.js` sets `base: "./"` so the build works from any folder or static host. Because of that, build asset URLs from `import.meta.env.BASE_URL` (see `src/data/photos.js`), not from absolute `/` paths.

## Architecture

- `src/App.jsx` sets the page order: Hero → InfoSection → Gallery → RsvpScene → Footer. Each section is self-contained and owns its own modal state.
- **All styling is in `src/styles.css`**, a plain global stylesheet carried over from the HTML version. Components use its class names directly (no CSS modules or CSS-in-JS). Palette tokens are on `:root` (`--cream`, `--sky`, `--ink`, `--butter`, `--gold`). Fonts (Caveat, Fraunces, Quicksand) come from Google Fonts in `index.html`. Illustrations are inline SVG in the JSX.
- **`Modal.jsx`** is the shared overlay/paper-note dialog. It stays mounted and toggles a `show` class so the CSS transitions can play. It handles Escape, backdrop click and focus return, and the body scroll lock is reference-counted at module level so modals opened one after another don't unlock the page too early. It moves focus to its `.note-close` button. InfoSection, Gallery and RsvpScene all use it; `cardClassName` changes the card style (for example, `photo-frame` for the gallery viewer).
- **RSVP flow:** `RsvpScene` plays the cork-pop animation and waits `UNCORK_MS` (480ms, which has to match the CSS animation) before it opens the modal with `RsvpForm`. The guest picks their name with `GuestSearch` (it only accepts names from `src/data/guests.js`). That gives their group, and they answer yes or no for each member. `fetchRsvp(groupId)` fills in any earlier reply, and `submitRsvp()` saves the new one over it (both are in `src/lib/submitRsvp.js`). While either call is running, `SunLoader` (the hero's `Sun` spinning) takes the form's place for at least `MIN_LOADING_MS`.
- **RSVP storage:** there is no server of our own. `submitRsvp.js` talks to a Google Apps Script web app (`apps-script/Code.gs`, which is pasted into the Sheet's script editor by hand and not built by Vite). Its URL comes from `VITE_RSVP_URL`. GET `?group=<id>` returns the saved reply, and a POST of JSON as `text/plain` (which avoids a CORS preflight) upserts one row per guest in the "Replies" tab, keyed by group `id` + guest name, and appends to the "Log" tab. If `VITE_RSVP_URL` is unset, replies go to `localStorage` for local testing. The payload shape `{groupId, group, members:[{name, attending:"yes"|"no"}], message}` has to stay in sync between `submitRsvp.js` and `Code.gs`. Changing a group's `id` orphans its existing replies.
- **Content lives in data, not markup:** the info cards (attire, location, gifts) are the `CARDS` array in `InfoSection.jsx`, and the gallery photos are generated in `src/data/photos.js` (`public/photos/photo-01.jpg` … `photo-15.jpg`, captions optional). `PhotoMedia` shows an SVG placeholder tile when an image fails to load, so missing photos are expected.

## Open items (from README)

- Event details don't match. The hero (`Hero.jsx`) and RSVP note (`RsvpForm.jsx`) say "Nov 14, 2:30 PM, That Little Cafe", but the Location card (`InfoSection.jsx`) says Orchard Hotel, Baguio City. If you change event details, update all three files.
- `src/data/guests.js` still has sample groups, and the Google Sheet has to be connected by the owner (README → "Connecting the Google Sheet").
