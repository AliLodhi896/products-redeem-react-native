import {BaseUrl} from '../constants/BaseUrl';

export const registered_or_unregistered = async mobile_no => {
  const numberWithCode = '91' + mobile_no
  try {
    let base_url = `${BaseUrl}reward/mobile_no_get.php?mobile=${numberWithCode}`;
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const user_profile = async userToken => {
  try {
    let base_url = `${BaseUrl}reward/customer_get_api.php?token=${userToken}`;
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verify_otp = async (mobile_no, otp) => {
  const numberWithCode = '91' + mobile_no
  try {
    let base_url = `${BaseUrl}reward/verify_otp.php?mobile=${numberWithCode}&otp=${otp}`;
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registration = async (data, otp) => {
  try {
    let base_url = `${BaseUrl}reward/customer_register_api.php`;
    const requestBody = JSON.stringify({
      Name: data?.username,
      Email: data.email,
      Mobile: data?.mobile_no,
      Address1: data.address_1,
      Address2: data.address_2,
      City: data.city,
      State: data.state,
      Verify: 1,
      DocsName: data.docs_name,
      DocsNo: data.docs_no,
      DOB: '1991-05-05',
      OTP: otp,
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


export const get_app_info = async () => {
  try {
    let base_url = `${BaseUrl}reward/company_mast.php`;
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};