const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const USER_INFO = 'user/USER_INFO';

export const getUserInfo = payload => {
  return {
    type: USER_INFO,
    payload
  };
};

export const loginUser = payload => {
  return {
    type: LOGIN,
    payload
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

const initialState = {
  isLogin: "wait",
  uid: null,
  email: null,
  password: null,
  photoURL: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        isLogin: action.payload.isLogin,
        uid: action.payload.uid,
        email: action.payload.email,
        photoURL: action.payload.photoURL
      };
    case LOGIN:
      return {
        isLogin: "member",
        email: action.payload.email,
        password: action.payload.password
      };
    case LOGOUT:
      return {
        isLogin: "guest",
        email: null,
        password: null
      };
    default:
      return state;
  }
};

export default user;
