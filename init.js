const ss = SpreadsheetApp.openById("1lLdSovGe_9jWfMGg-P8fzEZiaet4VuSLEnw9S1Y6R78");
const sheet = ss.getSheetByName("Página1");

function doGet(e) {
  var action = e.parameter.action;

  return HtmlService.createHtmlOutputFromFile("index");
  // if (action == "getInfo") {
  //   return getInformations(e);
  // }
}

function getInformations() {
  let data = {};

  let ultLin = sheet.getLastRow();

  for (let i=2; i<=ultLin; i++) {
      let dados = [];
      dados.push(sheet.getRange(i, 2).getValue());
      dados.push(sheet.getRange(i, 3).getValue());
      data[ sheet.getRange(i, 1).getValue() ] = dados;
  }

  let result = JSON.stringify(data);

  Logger.log(result);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
