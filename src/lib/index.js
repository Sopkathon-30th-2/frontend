import axios from 'axios';

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

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  console.log('>>>status', status);
  console.log('>>suspender', suspender);
  return {
    read() {
      if (status === 'pending') {
        console.log('펜딩상태임');
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        console.log('>>success에 들어와');
        return result;
      }
    },
  };
}
