import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../redux/modules/posts';
import { deleteComment } from '../../redux/modules/comments';

const Dots = ({ param }) => {
  const comments = useSelector(state => state.comments);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const afterSubmit = async () => {
    try {
      const q = query(collection(db, 'posts'));
      const querySnapShot = await getDocs(q);
      const initialPosts = [];
      querySnapShot.forEach(doc => {
        const post = {
          id: doc.id,
          ...doc.data()
        };
        initialPosts.push(post);
      });
      dispatch(getAllPost(initialPosts));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async id => {
    try {
      const check = window.confirm('정말 삭제하시겠습니까?');
      if (!check) return false;

      const postRef = doc(db, 'posts', id);
      await deleteDoc(postRef);
      await deleteComments(id);
      await afterSubmit();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComments = async postId => {
    try {
      comments.forEach(async comment => {
        if (comment.postId === postId) {
          const commentRef = doc(db, 'comment', comment.id);
          deleteComment(comment.id);
          await deleteDoc(commentRef);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DotAreaBox>
      <DotsWrapperBtn onClick={isOpenHandler} onBlur={() => setIsOpen(false)}>
        <DotSpan />
        <DotSpan />
        <DotSpan />
      </DotsWrapperBtn>
      {isOpen && (
        <OptionsList>
          <OptionItem onMouseDown={() => navigate(`/postWrite/${param.id}`)}>수정</OptionItem>
          <OptionItem onMouseDown={() => deletePost(param.id)}>삭제</OptionItem>
        </OptionsList>
      )}
    </DotAreaBox>
  );
};

export default Dots;

const OptionItem = styled.li`
  text-align: center;
  padding: 5px;
  font-size: 15px;
  &:hover {
    background-color: #dcdcdc;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
const OptionsList = styled.ul`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 40px;
  width: 50px;
  border: 0.5px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const DotSpan = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`;
const DotsWrapperBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 10px;
  background-color: #fafafa;
`;
const DotAreaBox = styled.div`
  position: relative;
`;
