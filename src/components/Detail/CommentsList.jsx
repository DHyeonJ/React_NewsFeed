import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { db } from '../../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComment } from '../../redux/modules/comments';
import { useParams } from 'react-router-dom';

function CommentsList() {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'comment'));
      const quertSnapShot = await getDocs(q);
      const initialPosts = [];
      quertSnapShot.forEach(doc => {
        const post = {
          id: doc.id,
          ...doc.data()
        };
        initialPosts.push(post);
      });
      dispatch(getAllComment(initialPosts));
    };
    fetchData();
  }, []);
  const comments = useSelector(state => state.comments);
  return (
    <>
      {comments
        .filter(comment => comment.postId === param.id)
        .map(item => {
          console.log(item.id);
          return (
            <Comment key={item.id}>
              <div>
                <CommentWriter>{item.userId}</CommentWriter>
                <p>{item.comment}</p>
                <CommentTime>{item.time}</CommentTime>
              </div>
              <DeleteBtn>삭제하기</DeleteBtn>
            </Comment>
          );
        })}
    </>
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

const DeleteBtn = styled.button`
  min-width: 70px;
  height: 40px;
  float: right;
  border-radius: 5px;
  margin-left: 15px;
  background-color: white;
  &:hover {
    background-color: #f8db5c;
    font-weight: 600;
  }
`;
