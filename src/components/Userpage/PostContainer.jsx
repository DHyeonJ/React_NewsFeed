import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase';

function PostContainer() {
  const [users, setUsers] = useState([]);
  const myUser = users.find(user => user.userEmail === auth.currentUser.email);

  const postDatas = useSelector(state => state.postDatas);
  // const commentDatas = useSelector(state => state);

  // firebase에 새로운 데이터 저장하기
  useEffect(() => {
    const fetchData = async () => {
      // collection 이름이 users인 collection의 모든 document를 가져옵니다.
      const q = query(collection(db, 'users'));
      const querySnapshot = await getDocs(q);

      const initialUsers = [];

      querySnapshot.forEach(doc => {
        initialUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(initialUsers);
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          border: '1px solid',
          padding: '10px'
        }}
      >
        {users.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <p>{myUser.userName}</p>
            <p>{myUser.userEmail}</p>
          </div>
        )}
      </div>
      <div
        style={{
          border: '1px solid',
          padding: '10px'
        }}
      >
        <p>작성한 글 목록</p>
      </div>
      {postDatas.map(data => {
        if (data.userEmail === auth.currentUser.email && data.category === '질문 게시판') {
          return (
            <div key={data.id}>
              <h3>질문 게시판</h3>
              <p>{data.title}</p>
              <p>{data.content}</p>
              <p>{data.img}</p>
            </div>
          );
        } else if (data.userEmail === auth.currentUser.email && data.category === '자랑 게시판') {
          return (
            <div key={data.id}>
              <h3>자랑 게시판</h3>
              <p>{data.title}</p>
              <p>{data.content}</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default PostContainer;
