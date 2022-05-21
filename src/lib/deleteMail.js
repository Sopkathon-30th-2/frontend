import axios from 'axios';
import wrapPromise from '../utils/wrapPromise';

const BASE_URL = 'https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app';

async function deleteMailData({ startDate, endDate }) {
  const response = await axios.get(`${BASE_URL}/mail?startDate${startDate}&endDate=${endDate}`, {
    headers: {
      token: process.env.REACT_APP_Token,
    },
  });
  return response;
}

export function fetchDeleteMailData({ startDate, endDate }) {
  return wrapPromise(deleteMailData({ startDate, endDate }));
}
