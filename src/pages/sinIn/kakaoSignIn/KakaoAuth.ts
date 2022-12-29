const CLIENT_ID = process.env.KAKAO_REST_API;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
