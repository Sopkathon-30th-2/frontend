import axios from 'axios';
import wrapPromise from '../utils/wrapPromise';

const BASE_URL = 'https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app';

// const email = 'nahee.developer@gmail.com';
async function getMailCountData() {
  const response = await axios.get(`${BASE_URL}/mail/count`, {
    headers: {
      token: process.env.REACT_APP_Token,
    },
  });
  return response;
}

export function fetchMailCountData() {
  return wrapPromise(getMailCountData());
}
