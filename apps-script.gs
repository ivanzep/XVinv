/**
 * Google Apps Script backend for confirmar.html (not served by the site; reference only).
 *
 * Setup:
 * 1. Create a Google Sheet. Put these headers in row 1: Nombre (A) | Apellido (B)
 * 2. Extensions > Apps Script. Paste this file's code, save.
 * 3. Deploy > New deployment > type "Web app".
 *    Execute as: Me. Who has access: Anyone.
 * 4. Copy the Web App URL into ENDPOINT in confirmar.html.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var guests = JSON.parse(e.parameter.invitados || "[]");
  guests.slice(0, 20).forEach(function (g) {
    sheet.appendRow([String(g.nombre).slice(0, 100), String(g.apellido).slice(0, 100)]);
  });
  return ContentService.createTextOutput("ok");
}
