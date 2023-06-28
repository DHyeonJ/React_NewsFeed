import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase';

function PostContainer() {
  const [users, setUsers] = useState([]);

  // id, 비밀번호 가져오기
  // const user = useSelector(state => {
  //   return state;
  // });
  // console.log('user => ', user);

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

  const myUser = users.find(user => user.userEmail === auth.currentUser.email);
  console.log('현재 로그인한 유저', myUser);
  console.log('auth', auth);
  // console.log('테스트', myUser.userName);

  return (
    <>
      <div
        style={{
          border: '1px solid',
          padding: '10px'
        }}
      >
        {/* <p>{myUser.userPw}</p>
        <p>{myUser.userEmail}</p> */}
      </div>
      <div
        style={{
          border: '1px solid',
          padding: '10px'
        }}
      >
        <p>작성한 글 목록</p>
      </div>
    </>
  );
}

export default PostContainer;
