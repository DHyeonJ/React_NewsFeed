const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const loginUser = payload => {
  return {
    type: LOGIN,
    payload
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

const initialState = {
  isLogin: false,
  email: null,
  password: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
        email: action.payload.email,
        password: action.payload.password
      };
    case LOGOUT:
      return {
        isLogin: false,
        email: null,
        password: null
      };
    default:
      return state;
  }
};

export default user;
