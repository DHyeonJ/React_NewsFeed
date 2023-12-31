import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import currentTime from '../../feature/currentTime';

function Form({ text, setText, isEdit, setIsEdit, post }) {
  const { user } = useSelector(state => state);
  const navigate = useNavigate();
  const param = useParams();
  const onSubmitCommentHandler = async e => {
    try {
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
      if (isEdit.isIt) {
        const item = isEdit.item;
        const { id } = item;
        const commentRef = doc(db, 'comment', id);
        await updateDoc(commentRef, { ...item, comment: text });
        setText('');
        setIsEdit({ isIt: false, item: {} });
      } else {
        const newComment = {
          postId: param.id,
          userName: user.userName,
          userId: user.email,
          category: post.category,
          comment: comment.value,
          time: currentTime(),
          uid: user.uid
        };
        const collectionRef = collection(db, 'comment');
        setText('');
        await addDoc(collectionRef, newComment);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <CommentForm onSubmit={onSubmitCommentHandler}>
        <CommentTextArea
          placeholder="댓글을 입력하세요"
          name="comment"
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
        ></CommentTextArea>
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

const CommentTextArea = styled.textarea`
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
  cursor: pointer;
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
