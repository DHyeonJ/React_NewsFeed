const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const USER_INFO = 'user/USER_INFO';
const PHOTO_CHANGE = 'user/PHOTO_CHANGE';

export const getUserInfo = payload => {
  return {
    type: USER_INFO,
    payload
  };
};

export const changePhoto = payload => {
  return {
    type: PHOTO_CHANGE,
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
  isLogin: 'wait',
  uid: null,
  email: null,
  password: null,
  photoURL: null,
  docId: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      console.log(action.payload);
      return {
        isLogin: action.payload.isLogin,
        uid: action.payload.uid,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
        docId: action.payload.docId
      };
    case PHOTO_CHANGE:
      return {
        ...state,
        photoURL: action.payload.url
      };
    case LOGIN:
      return {
        isLogin: 'member',
        email: action.payload.email,
        password: action.payload.password
      };
    case LOGOUT:
      return {
        isLogin: 'guest',
        email: null,
        password: null
      };
    default:
      return state;
  }
};

export default user;
