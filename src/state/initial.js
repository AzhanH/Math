const auth = {
  state: {
    token: null,
    user: null,
  },
  name: 'auth',
};

const general = {
  state: {
    general: null,
  },
  name: 'general',
};

const initial = {
  auth,
  general,
};
export default initial;
