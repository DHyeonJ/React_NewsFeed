const GET_POSTS = 'posts/GET_POSTS';
const SEARCH_POSTS = 'posts/SEARCH_POST';

export const getAllPost = payload => {
  return {
    type: GET_POSTS,
    payload
  };
};
export const getSearchData = payload => {
  return {
    type: SEARCH_POSTS,
    payload
  };
};

const initialState = [];

const postDatas = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case SEARCH_POSTS:
      return action.payload;

    default:
      return state;
  }
};

export default postDatas;
