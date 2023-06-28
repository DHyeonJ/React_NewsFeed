import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { getAllComment } from '../../redux/modules/comments';
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

function Form() {
  const [text, setText] = useState('');
  const { comments, user } = useSelector(state => state);
  const navigate = useNavigate();
  const param = useParams();
  const onSubmitCommentHandler = async e => {
    e.preventDefault();
    if (user.isLogin === 'guest') {
      alert('로그인이 필요합니다');
      navigate('/login');
      return false;
    }
    const { comment = 0 } = e.target;
    if (comment.value === '') {
      alert('댓글을 입력해 주세요');
      return false;
    }
    const newComment = {
      postId: param.id,
      userId: user.email,
      comment: comment.value,
      time: '2023/6/25 22:42:26'
    };
    const collectionRef = collection(db, 'comment');
    setText('');
    await addDoc(collectionRef, newComment);
  };
  return (
    <section>
      <CommentForm onSubmit={onSubmitCommentHandler}>
        <CommentInput
          placeholder="댓글을 입력하세요"
          name="comment"
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
        >
        </CommentInput>
        <CommentBtn type="submit">입력</CommentBtn>
      </CommentForm>
    </section>
  );
}

export default Form;

const CommentForm = styled.form`
  width: 100%;
  height: 100px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CommentInput = styled.textarea`
  width: 500px;
  height: 70px;
  resize: none;
  border-radius: 8px;
  padding: 7px;
  box-shadow: rgba(18, 38, 58, 0.1) 0px 1px 3px 0px, rgba(18, 38, 58, 0.06) 0px 1px 2px 0px;
  &:focus {
    border: none;
    outline: 2px solid #f8db5c;
  }
`;

const CommentBtn = styled.button`
  width: 100px;
  height: 45px;
  margin-left: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: #12263a;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
  &:focus {
    color: #f8db5c;
  }
`;
