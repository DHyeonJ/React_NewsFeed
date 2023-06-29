import React, { useState } from 'react';
import Contents from './Contents';
import Form from './CommentForm';
import CommentsList from './CommentsList';
import { useSelector } from 'react-redux';

const Detail = () => {
  const user = useSelector(state => state.user);
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState({
    isIt: false,
    item: {}
  });
  const editCommentBtnHandler = item => {
    const { id, userId } = item;
    if (userId !== user.email) {
      alert('본인의 댓글만 삭제가 가능합니다');
      return false;
    }
    const inputPw = prompt('비밀번호를 입력해 주세요');
    if (inputPw !== user.password) {
      alert('비밀번호가 다릅니다');
      return false;
    }
    setIsEdit({ isIt: true, item });
    setText(item.comment);
  };
  return (
    <>
      <Contents />
      <Form text={text} setText={setText} isEdit={isEdit} setIsEdit={setIsEdit} />
      <CommentsList editCommentBtnHandler={editCommentBtnHandler} />
    </>
  );
};

export default Detail;
