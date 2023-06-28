const GET_COMMENTS = 'comments/GET_COMMENTS';

export const getAllComment = payload => {
  return {
    type: GET_COMMENTS,
    payload
  };
};

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [state, ...action.payload];

    default:
      return state;
  }
};

export default comments;
