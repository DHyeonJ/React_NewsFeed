import { createStore } from 'redux';
import { combineReducers } from 'redux';
import user from '../modules/user';

// store를 만들어 내기
// 중앙데이터관리소
const rootReducer = combineReducers({
  user
});

const store = createStore(rootReducer);

export default store;
