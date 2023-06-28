import { createStore } from 'redux';
import { combineReducers } from 'redux';
import user from '../modules/user';
import postDatas from '../modules/posts';

// store를 만들어 내기
// 중앙데이터관리소
const rootReducer = combineReducers({
  user,
  postDatas
});

const store = createStore(rootReducer);

export default store;
