/**
 * Google Apps Script backend for confirmar.html (not served by the site; reference only).
 *
 * Setup:
 * 1. Create a Google Sheet. Put these headers in row 1: Nombre (A) | Apellido (B)
 * 2. Extensions > Apps Script. Paste this file's code, save.
 * 3. Deploy > New deployment > type "Web app".
 *    Execute as: Me. Who has access: Anyone.
 *    After editing the code later: Deploy > Manage deployments > edit > New version.
 * 4. Copy the Web App URL into ENDPOINT in confirmar.html.
 *
 * Names already in the sheet are skipped (case, accent and spacing are ignored)
 * and returned in "duplicates" so the page can tell the guest.
 */
function norm(s) {
  return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/\s+/g, " ").trim();
}
function key(nombre, apellido) { return norm(nombre) + "|" + norm(apellido); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var guests = JSON.parse(e.parameter.invitados || "[]").slice(0, 20);
    var last = sheet.getLastRow();
    var seen = {};
    if (last > 1) {
      sheet.getRange(2, 1, last - 1, 2).getValues().forEach(function (r) {
        seen[key(r[0], r[1])] = true;
      });
    }
    var added = [], duplicates = [];
    guests.forEach(function (g) {
      var nombre = String(g.nombre).slice(0, 100).trim();
      var apellido = String(g.apellido).slice(0, 100).trim();
      var k = key(nombre, apellido);
      if (seen[k]) { duplicates.push({ nombre: nombre, apellido: apellido }); return; }
      seen[k] = true;
      sheet.appendRow([nombre, apellido]);
      added.push({ nombre: nombre, apellido: apellido });
    });
    return ContentService.createTextOutput(JSON.stringify({ added: added, duplicates: duplicates }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
