import axios from 'axios';
import wrapPromise from '../utils/wrapPromise';

// const BASE_URL = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

async function getData() {
  const response = await axios.get(
    'https://server.sodam.me/shop?offset=1&limit=100&sort=poopular&theme=%ED%9E%99%ED%95%9C',
  );
  return response;
}

export function fetchData() {
  return wrapPromise(getData());
}
