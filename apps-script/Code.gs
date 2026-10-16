/**
 * RSVP backend for Ryeo's birthday site, run by Google Apps Script inside
 * the Google Sheet that holds the replies. See the README for setup.
 *
 * "Replies" has one row per guest with their latest answer; a changed reply
 * overwrites that row. "Log" gets a row for every submission, so earlier
 * answers are never lost.
 */

const REPLIES = "Replies";
const LOG = "Log";
const REPLY_HEADERS = ["Group ID", "Group", "Guest", "Attending", "Message", "Updated"];
const LOG_HEADERS = ["Received", "Group ID", "Group", "Guest", "Attending", "Message"];

const MAX_MEMBERS = 30;
const MAX_TEXT = 1000;

// GET ?group=<id> -> that group's current reply.
function doGet(e) {
  const groupId = String((e.parameter && e.parameter.group) || "");
  if (!groupId) return json({ ok: false, error: "Missing group" });

  const rows = getSheet(REPLIES, REPLY_HEADERS).getDataRange().getValues().slice(1);
  const mine = rows.filter((r) => String(r[0]) === groupId);
  if (!mine.length) return json({ ok: true, members: [] });

  const latest = mine.reduce((a, b) => (new Date(b[5]) > new Date(a[5]) ? b : a));
  return json({
    ok: true,
    members: mine.map((r) => ({
      name: String(r[2]),
      attending: r[3] === "Yes" ? "yes" : "no",
    })),
    message: String(latest[4] || ""),
    updatedAt: new Date(latest[5]).toISOString(),
  });
}

// POST {groupId, group, members: [{name, attending}], message} -> saves it.
function doPost(e) {
  let data;
  try {
    data = validate(JSON.parse(e.postData.contents));
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const now = new Date();
    const replies = getSheet(REPLIES, REPLY_HEADERS);
    const log = getSheet(LOG, LOG_HEADERS);
    const values = replies.getDataRange().getValues();

    data.members.forEach((m) => {
      const attending = m.attending === "yes" ? "Yes" : "No";
      const row = [data.groupId, data.group, m.name, attending, data.message, now].map(safe);
      const i = values.findIndex(
        (r, idx) => idx > 0 && String(r[0]) === data.groupId && String(r[2]) === m.name,
      );
      if (i > 0) {
        replies.getRange(i + 1, 1, 1, row.length).setValues([row]);
      } else {
        replies.appendRow(row);
        values.push(row);
      }
      log.appendRow([now, data.groupId, data.group, m.name, attending, data.message].map(safe));
    });

    return json({ ok: true, updatedAt: now.toISOString() });
  } finally {
    lock.releaseLock();
  }
}

function validate(d) {
  const text = (v, max) => {
    if (typeof v !== "string") throw new Error("Bad request");
    return v.trim().slice(0, max);
  };
  if (!d || !Array.isArray(d.members) || !d.members.length || d.members.length > MAX_MEMBERS) {
    throw new Error("Bad request");
  }
  const out = {
    groupId: text(d.groupId, 100),
    group: text(d.group, 200),
    message: text(d.message || "", MAX_TEXT),
    members: d.members.map((m) => {
      if (m.attending !== "yes" && m.attending !== "no") throw new Error("Bad request");
      return { name: text(m.name, 200), attending: m.attending };
    }),
  };
  if (!out.groupId || out.members.some((m) => !m.name)) throw new Error("Bad request");
  return out;
}

// Anything typed by a guest that starts like a formula is stored as text.
function safe(v) {
  return typeof v === "string" && /^[=+\-@]/.test(v) ? "'" + v : v;
}

function getSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
