import {BaseUrl} from '../constants/BaseUrl';

export const get_scan_history = async userToken => {
  try {
    let base_url = `${BaseUrl}reward/scan_history_api.php?token=${userToken}`;
    const response = await fetch(base_url, {
      method: 'GET',
    });

    const responseData = await response.json();
    console.log('responseData', responseData);
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const scan_item = async (scannedValue, userToken) => {
  try {
    let base_url = `${BaseUrl}reward/qrcode_get_api.php`;
    const requestBody = JSON.stringify({
      QRCodeValue: scannedValue,
      Token: userToken,
    });
    const response = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};
