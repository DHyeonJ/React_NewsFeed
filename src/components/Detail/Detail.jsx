import React, { useState } from 'react';
import Contents from './Contents';
import Form from './CommentForm';
import CommentsList from './CommentsList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const param = useParams();
  const user = useSelector(state => state.user);
  const post = useSelector(state => {
    const matchPost = state.postDatas.find(doc => doc.id === param.id);
    return matchPost;
  });
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState({
    isIt: false,
    item: {}
  });
  const editCommentBtnHandler = item => {
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
      <Contents post={post} param={param} />
      <Form text={text} setText={setText} isEdit={isEdit} setIsEdit={setIsEdit} post={post} />
      <CommentsList editCommentBtnHandler={editCommentBtnHandler} />
    </>
  );
};

export default Detail;
