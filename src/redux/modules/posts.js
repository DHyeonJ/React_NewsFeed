const GET_POSTS = 'posts/GET_POSTS';
const VIEW_POST = 'posts/VIEW_POST';

export const getAllPost = payload => {
  return {
    type: GET_POSTS,
    payload
  };
};

export const viewPost = payload => {
  return {
    type: VIEW_POST
  };
};

const initialState = [];

const postDatas = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];

    default:
      return state;
  }
};

export default postDatas;
