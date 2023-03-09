export const urls = {
  v1: `https://dev74.onlinetestingserver.com/mathbee/api`,
};
export const base_url = urls.v1;
export const endpoints = {
  auth: {
    signup: '/teacher/register',
    login: '/teacher/login',
    logout: '/teacher/profile/logout',
    forgotPassword: '/teacher/forgot-password',
    verifyCode: '/teacher/email-verification',
    resetPassword: '/teacher/reset-password',
  },
  general: {
    contactUs: '/contact-us',
    terms: '/terms-and-conditons',
    privacy: '/privacy-policy',
  },
};
export default {
  endpoints: endpoints,
  base_url: base_url,
};
