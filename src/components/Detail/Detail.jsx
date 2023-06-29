import React, { useEffect, useState } from 'react';
import Contents from './Contents';
import Form from './CommentForm';
import CommentsList from './CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const param = useParams();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const post = useSelector(state => {
    const matchPost = state.postDatas.find(doc => doc.id === param.id);
    return matchPost;
  });
  console.log(post);
  // useEffect(() => {
  //   //dispatch를 보내 리덕스의 post데이터 변경
  //   //파이어베이스의 doc데이터 변경
  // }[])
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
      <Contents post={post} />
      <Form text={text} setText={setText} isEdit={isEdit} setIsEdit={setIsEdit} post={post} />
      <CommentsList editCommentBtnHandler={editCommentBtnHandler} />
    </>
  );
};

export default Detail;
