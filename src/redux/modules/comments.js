const GET_COMMENTS = 'comments/GET_COMMENTS';
const DELETE_COMMENTS = 'comments/DELETE_COMMENTS';

export const getAllComment = payload => {
  return {
    type: GET_COMMENTS,
    payload
  };
};

export const deleteComment = payload => {
  return {
    type: DELETE_COMMENTS,
    payload
  };
};

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [state, ...action.payload];
    case DELETE_COMMENTS:
      const newComments = state.filter(comment => comment.id !== action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default comments;
