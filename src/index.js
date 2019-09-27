import ThailandPost from './service';

const onOpen = () => {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Thailand Post Tracker')
    .addItem('Renew AccessToken', 'getNewAccessToken')
    .addToUi();
};

const getNewAccessToken = () => {
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet();
  const staticToken = activeSheet.getRangeByName('StaticToken').getValue();
  const accessTokenCell = activeSheet.getRangeByName('AccessToken');
  const accessToken = ThailandPost.getToken(staticToken);
  accessTokenCell.setValue(accessToken);
};

const ThailandPostTrack = (barcode, type) => {
  const activeSheet = SpreadsheetApp.getActiveSpreadsheet();
  const accessToken = activeSheet.getRangeByName('AccessToken').getValue();
  const items = ThailandPost.getItems(accessToken, barcode);
  const results = items.map(item => [item.status_description, item.status_date, item.location]);

  if (results.length === 0) return 'ไม่พบข้อมูล';

  switch (type) {
    case 'recent':
      return [results[results.length - 1]];
    case 'first':
      return [results[0]];
    case 'all':
      return results;
    default:
      return [results[results.length - 1]];
  }
};

global.onOpen = onOpen;
global.getNewAccessToken = getNewAccessToken;
global.ThailandPostTrack = ThailandPostTrack;
