// const CLIENT_ID = process.env.KAKAO_REST_API;
const CLIENT_ID = 'fc2cfa8f3dec4f562e86cded40e7838a'; // rest api key
// const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
