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
    logout: '/teacher/logout',
  },
  teacher: {
    sendStudentInvite: '/teacher/student/send_invite',
    getMyStudents: '/teacher/student/list',
  },
  profile: {
    changePassword: '/teacher/change/password',
    getProfile: '/teacher/profile',
    createProfile: '/teacher/profile/add',
    updateProfile: '/teacher/profile',
    updateStudentProfile: id => `/teacher/student/profile/${id}`,
    getStudentProfile: id => `/teacher/student/profile/${id}`,
  },
  notifications: {
    allNotifications: '/teacher/notification/',
    readNotification: id => `/teacher/notification/read?notification_id=${id}`,
  },
  general: {
    state: '/general/state',
    allClasess: '/general/class',
    allCountries: '/general/countries',
    allLevels: '/general/competition_levels',
    allModes: '/general/modes',
    allSchools: '/general/schools',
    allTeachers: '/teacher/get-all-teachers',
    cities: '/general/city',
    contactUs: '/contact-us',
    termsAndConditions: '/terms-and-conditons',
    privacyPolicy: '/privacy-policy',
  },
  classes: {
    createClass: '/teacher/class/create-class',
    allClasess: '/teacher/class/index',
    classDetails: id => `/teacher/class/details/${id}`,
    removeStudentFromClass: id => `/teacher/class/remove-student/${id}`,
    addStudentToClass: '/teacher/class/add-students',
  },
  teams: {
    removePlayerFromTeam: id => `/teacher/team/remove-student/${id}`,
    createTeam: '/teacher/team/create-team',
    getAllTeams: '/teacher/team/index',
    getTeamDetail: id => `/teacher/team/details/${id}`,
    addStudentToTeam: '/teacher/team/add-student',
  },
  plans: {
    subscribePlan: id => `/teacher/subscriptions/${id}`,
    readPlans: '/plans',
  },
  contest: {
    getAllContests: '/teacher/contest',
    createContest: '/teacher/contest',
    updateContest: id => `/teacher/contest/${id}`,
    getContestDetail: id => `/teacher/contest/${id}`,
    sendInviteToParents: '/teacher/contests/send_invite',
    updateContestInviteStatus: '/teacher/contests/invite_status',
  },
};

export default {
  endpoints: endpoints,
  base_url: base_url,
};
