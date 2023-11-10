const ss = SpreadsheetApp.openById("1lLdSovGe_9jWfMGg-P8fzEZiaet4VuSLEnw9S1Y6R78");
const sheet = ss.getSheetByName("pag1");

function doGet(e) {
  var action = e.parameter.action;

  if (action == "getInfo") {
    getInformations("getInfo");
  }

  return HtmlService.createHtmlOutputFromFile("index");
  
}

function getInformations(param) {
  let data = {};

  let ultLin = sheet.getLastRow();

  for (let i=2; i<=ultLin; i++) {
      let dados = [];
      dados.push(sheet.getRange(i, 2).getValue());
      dados.push(sheet.getRange(i, 3).getValue());
      data[ sheet.getRange(i, 1).getValue() ] = dados;
  }

  let result = JSON.stringify(data);

  sheet.getRange(sheet.getLastRow() + 1, 10).setValue(param);

  Logger.log(result);

  return result;
}
