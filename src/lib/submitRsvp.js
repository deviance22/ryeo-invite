// Talks to the Google Apps Script web app that keeps replies in a Google
// Sheet (see apps-script/Code.gs and the README for setup). Its URL comes
// from VITE_RSVP_URL in .env.
//
// Without a URL (for example while trying the site locally) replies are kept
// in this browser's localStorage instead, so the flow still works end to end
// but nothing reaches the sheet.
const ENDPOINT = import.meta.env.VITE_RSVP_URL;

if (!ENDPOINT) {
    console.warn(
        "VITE_RSVP_URL is not set: RSVP replies are only saved in this browser.",
    );
}

const LOCAL_KEY = "rsvp-replies";

function readLocal() {
    try {
        return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    } catch {
        return {};
    }
}

function writeLocal(all) {
    try {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
    } catch {
        // Storage blocked; the reply just is not remembered.
    }
}

async function readJson(res) {
    if (!res.ok) throw new Error(`RSVP request failed (${res.status})`);
    const data = await res.json();
    if (data.ok === false) throw new Error(data.error || "RSVP request failed");
    return data;
}

/**
 * The group's saved reply, or null if nobody in it has answered yet.
 *
 * @param {string} groupId
 * @returns {Promise<null | { members: { name: string, attending: "yes" | "no" }[], message: string, updatedAt: string }>}
 */
export async function fetchRsvp(groupId) {
    if (!ENDPOINT) return readLocal()[groupId] || null;

    const url = `${ENDPOINT}?group=${encodeURIComponent(groupId)}`;
    const data = await readJson(await fetch(url));
    return data.members?.length ? data : null;
}

/**
 * Saves the group's reply, replacing any earlier one. Throwing here keeps the
 * form open so the guest can try again.
 *
 * @param {{ groupId: string, group: string, members: { name: string, attending: "yes" | "no" }[], message: string }} rsvp
 * @returns {Promise<{ updatedAt: string }>}
 */
export async function submitRsvp(rsvp) {
    if (!ENDPOINT) {
        const updatedAt = new Date().toISOString();
        const all = readLocal();
        all[rsvp.groupId] = { ...rsvp, updatedAt };
        writeLocal(all);
        return { updatedAt };
    }

    // text/plain keeps this a "simple" request, which Apps Script accepts
    // without a CORS preflight.
    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(rsvp),
    });
    return readJson(res);
}
