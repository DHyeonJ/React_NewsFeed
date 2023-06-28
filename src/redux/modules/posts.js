const GET_POSTS = 'posts/GET_POSTS';

export const getAllPost = payload => {
  return {
    type: GET_POSTS,
    payload
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
