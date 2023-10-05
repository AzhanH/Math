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
    sendStudentInvite: '/teacher/student/send_invite',
    getMyStudents: '/teacher/student/list',
  },
  profile: {
    changePassword: '/teacher/change/password',
    getProfile: '/teacher/profile',
    createProfile: '/teacher/profile/add',
    getStudentProfile: id => `/teacher/student/profile/${id}`,
  },
  general: {
    state: '/general/state',
    allClasess: '/general/class',
    allCountries: '/general/countries',
    allLevels: '/general/competition_levels',
    allModes: '/general/modes',
    allSchools: '/general/schools',
  },
  teams: {
    removePlayerFromTeam: id => `/teacher/team/remove-student/${id}`,
    createTeam: '/teacher/team/create-team',
    getAllTeams: '/teacher/team/index',
    getTeamDetail: id => `/teacher/team/details/${id}`,
    addStudentToTeam: '/teacher/team/add-student',
  },
  plans: {
    subscribePlan: id => `/teacher/plan/subscribe-plan/${id}`,
    readPlans: '/teacher/plan/index',
  },
  contest: {
    getAllContests: '/teacher/contest/index',
    createContest: '/teacher/contest',
    getContestDetail: id => `/teacher/contest/details/${id}`,
  },
};

export default {
  endpoints: endpoints,
  base_url: base_url,
};
