export const urls = {
  v1: `https://custom-dev.onlinetestingserver.com/mathbee_backend/api`,
};
export const base_url = urls.v1;
export const endpoints = {
  auth: {
    signup: '/teacher/register',
    login: '/teacher/login',
    logout: '/teacher/logout',
    forgotPassword: '/teacher/forget/password',
    verifyCode: '/teacher/verification',
    resetPassword: '/teacher/reset/password',
  },
  teacher: {
    register: '/teacher/student/register',
  },
  general: {
    getGeneralData: '/general',
    getAllStudents: '/teacher/student/index',
    getAllTeachers: '/teacher/contest/teachers',
    contactUs: '/contact-us',
    terms: '/terms-and-conditons',
    privacy: '/privacy-policy',
  },
  profile: {
    getProfile: '/teacher/profile/index',
    createProfile: '/teacher/profile/add',
    getStudentProfile: id => `/teacher/student/details/${id}`,
  },
  teams: {
    createTeam: '/teacher/team/create-team',
    getAllTeams: '/teacher/team/index',
  },
  plans: {
    subscribePlan: id => `/teacher/plan/subscribe-plan/${id}`,
    readPlans: '/teacher/plan/index',
  },
  contest: {
    getAllContests: '/teacher/contest/index',
    createContest: '/teacher/contest/create',
    getContestDetail: id => `/teacher/contest/details/${id}`,
  },
};

export default {
  endpoints: endpoints,
  base_url: base_url,
};
