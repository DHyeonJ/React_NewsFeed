import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getAllComment } from '../../redux/modules/comments';
import { useParams } from 'react-router-dom';
import TopButton from '../TopButton/TopButton';

function CommentsList({ editCommentBtnHandler }) {
  const comments = useSelector(state => state.comments);
  const user = useSelector(state => state.user);
  const param = useParams();
  const dispatch = useDispatch();
  const deleteBtnHandler = async item => {
    const { id } = item;
    const check = window.confirm('정말 삭제하시겠습니까?');
    if (!check) {
      return false;
    }
    const commentRef = doc(db, 'comment', id);
    deleteComment(id);
    await deleteDoc(commentRef);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const offset = (currentPage - 1) * limit;
  const option = { root: null, rootMargin: '0px', threshold: 0.5 };
  const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setCurrentPage(prevPage => prevPage + 1);
        }, 500);
      }
    },
    {
      ...defaultOption,
      ...option
    }
  );

  const divRef = useRef();
  useEffect(() => {
    observer.observe(divRef.current);
  }, []);

  return (
    <section style={{ position: 'relative' }}>
      {comments
        .filter(comment => comment.postId === param.id)
        .toSorted((a, b) => {
          const replaceA = a.time.replace(/[^0-9]/g, '');
          const replaceB = b.time.replace(/[^0-9]/g, '');
          return replaceB - replaceA;
        })
        .map(item => {
          return (
            <Comment key={item.id}>
              <div>
                <CommentWriter>{item.userName ? item.userName : item.userId}</CommentWriter>
                <p>{item.comment}</p>
                <CommentTime>{item.time}</CommentTime>
              </div>
              {item.userId === user.email && (
                <ButtonWrapper>
                  <Button onClick={() => editCommentBtnHandler(item)}>수정하기</Button>
                  <Button onClick={() => deleteBtnHandler(item)}>삭제하기</Button>
                </ButtonWrapper>
              )}
            </Comment>
          );
        })
        .slice(0, offset + 10)}
      <div ref={divRef}></div>
      <MoveButtonArea>
        <TopButton />
      </MoveButtonArea>
    </section>
  );
}

export default CommentsList;

const CommentTime = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #a99d9d;
`;
const Comment = styled.div`
  background-color: #12263a;
  color: white;
  padding: 20px;
  margin: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const CommentWriter = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  &:hover {
    background-color: #f8db5c;
  }
`;
const MoveButtonArea = styled.div`
  position: fixed;
  right: 40px;
  bottom: 100px;
`;
