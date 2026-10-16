/**
 * Called when a guest sends the RSVP form.
 *
 * Right now this only resolves, so nothing is stored anywhere. Replace the
 * body with a call to whatever you use to collect replies (Google Form,
 * Airtable, a small API, an email service...). Throwing here keeps the form
 * open so the guest can try again.
 *
 * @param {{ name: string, attending: "yes" | "no", guests: number, message: string }} rsvp
 */
export async function submitRsvp(rsvp) {
    // TODO: send `rsvp` somewhere you can read it.
    return rsvp;
}
