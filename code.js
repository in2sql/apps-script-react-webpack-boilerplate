// Apps Script (Servrer) Code goes here
// Note: we save the file as *.js here, Clasp converts it to *.gs

function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Show sidebar", "showSidebar")
    /* more menu items if needed */
    .addToUi();
}
function onInstall(e) {
  onOpen(e);
}
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile("dist/index")
    .evaluate()
    .setTitle("React + Webpack");
  SpreadsheetApp.getUi().showSidebar(ui);
}
var include = function (filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};

var ho = function () {
  // this is for the furure
  return "Hello from Apps Script!";
};
