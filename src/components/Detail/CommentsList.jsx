import React from 'react';
import { styled } from 'styled-components';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getAllComment } from '../../redux/modules/comments';
import { useParams } from 'react-router-dom';

function CommentsList() {
  const comments = useSelector(state => state.comments);
  console.log(comments)
  const param = useParams();
  const dispatch = useDispatch();
  const deleteBtnHandler = async commentId => {
    const commentRef = doc(db, 'comment', commentId);
    deleteComment(commentId);
    await deleteDoc(commentRef);
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
  return (
    <>
      {comments
        .filter(comment => comment.postId === param.id)
        .toSorted((a, b) => {
          const replaceA = a.time.replace(/[^0-9]/g, "");
          const replaceB = b.time.replace(/[^0-9]/g, "");
          return replaceB - replaceA
        })
        .map(item => {
          return (
            <Comment key={item.id}>
              <div>
                <CommentWriter>{item.userId}</CommentWriter>
                <p>{item.comment}</p>
                <CommentTime>{item.time}</CommentTime>
              </div>
              <DeleteBtn onClick={() => deleteBtnHandler(item.id)}>삭제하기</DeleteBtn>
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
