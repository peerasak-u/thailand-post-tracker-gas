const url = 'https://trackapi.thailandpost.co.th/post/api/v1';

export default {
  getToken(staticToken) {
    const options = {
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: `Token ${staticToken}`,
        'Content-Type': 'application/json'
      },
      validateHttpsCertificates: false
    };
    const data = UrlFetchApp.fetch(`${url}/authenticate/token`, options);
    const { token } = JSON.parse(data);
    return token;
  },
  getItems(accessToken, barcode) {
    const options = {
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: `Token ${accessToken}`,
        'Content-Type': 'application/json'
      },
      validateHttpsCertificates: false,
      payload: JSON.stringify({
        status: 'all',
        language: 'TH',
        barcode: [barcode]
      })
    };
    const data = UrlFetchApp.fetch(`${url}/track`, options);
    const { response } = JSON.parse(data);
    return response.items[barcode];
  }
};
