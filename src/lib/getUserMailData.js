import axios from 'axios';
import wrapPromise from '../utils/wrapPromise';

const BASE_URL = 'https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app';
const accssToken =
  'ya29.a0ARrdaM_cBevqqZnVabY8cErX3kkVzbdNxMOpy9KZ7m9KIJ1pjsq5QrhgYOE55FZvCRzVqqPkL29Rjt-Y-80gqilVpFfr6GdXkJqkyUQFRFn7rcQIsP53VY1owmYMYqxRLdNmc3JGZgNy4miyRBlrLgpb3K-nsb4';
// const email = 'nahee.developer@gmail.com';
async function getMailCountData() {
  const response = await axios.get(`${BASE_URL}/mail/count`, {
    headers: {
      token: accssToken,
    },
  });
  return response;
}

export function fetchMailCountData() {
  return wrapPromise(getMailCountData());
}
