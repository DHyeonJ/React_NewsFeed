import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase';
import UserProfile from './UserProfile';

function PostContainer() {
  const [users, setUsers] = useState([]);
  const myUser = users.find(user => user.userEmail === auth.currentUser.email);
  // console.log('myUser => ', myUser);

  const postDatas = useSelector(state => state.postDatas);
  // console.log('postDatas', postDatas);
  const myPost = postDatas.filter(post => post.userEmail === auth.currentUser.email);
  // console.log('myPost => ', myPost);
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
    <div>
      <UserProfile />
      시작
    </div>
  );
}

export default PostContainer;
