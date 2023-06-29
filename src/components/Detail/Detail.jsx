import React from 'react';
import Contents from './Contents';
import Form from './CommentForm';
import CommentsList from './CommentsList';

const Detail = () => {
  const editCommentBtnHandler = (item) => {
    const {id, userId} = item;

  };
  return (
    <>
      <Contents />
      <Form />
      <CommentsList editCommentBtnHandler={editCommentBtnHandler} />
    </>
  );
};

export default Detail;
