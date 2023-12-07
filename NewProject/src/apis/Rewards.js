import {BaseUrl} from '../constants/BaseUrl';


export const get_rewards_scheme = async () => {
    try {
      let base_url = `http://business.srssoftwares.in/reward_api/reward/reward_scheme.php?SchemeStatus=0`;
      const response = await fetch(base_url, {
        method: 'GET',
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(error.message);
    }
  };


export const get_redeem_history = async (userToken) => {
  try {
    let base_url = `${BaseUrl}reward/redeem_history_api.php?token=${userToken}`;
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const add_rewards = async (rewardCode, userToken) => {
  try {
    let base_url = `${BaseUrl}reward/redeem_request.php`;
    const requestBody = JSON.stringify({
      SchemeCode: rewardCode,
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