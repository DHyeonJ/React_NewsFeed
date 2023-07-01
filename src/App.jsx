import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db, auth } from './firebase';
import Router from './shared/Router';
import { getAllPost } from './redux/modules/posts';
import { useDispatch } from 'react-redux';
import { getUserInfo } from './redux/modules/user';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getAllComment } from './redux/modules/comments';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // post 정보 불러오기
    const fetchData = async () => {
      const q = query(collection(db, 'posts'));
      onSnapshot(q, querySnapshot => {
        const initialPosts = [];
        querySnapshot.forEach(doc => {
          const post = {
            id: doc.id,
            ...doc.data()
          };
          initialPosts.push(post);
        });
        dispatch(getAllPost(initialPosts));
      });
    };
    fetchData();
    //  유저 정보 불러오기
    const userFetch = async uid => {
      const q = query(collection(db, 'users'));
      const querySnapShot = await getDocs(q);
      const initialUsers = [];
      querySnapShot.forEach(doc => {
        const user = {
          id: doc.id,
          ...doc.data()
        };
        initialUsers.push(user);
      });

      const result = initialUsers.find(user => user.uid === uid);
      if (result === undefined) {
        return null;
      }
      return result;
    };

    onAuthStateChanged(auth, async state => {
      if (state) {
        const { email, uid } = state;
        const result = await userFetch(uid);
        if (result !== null) {
          dispatch(
            getUserInfo({
              email,
              photoURL: result.photoUrl,
              uid,
              docId: result.id,
              isLogin: 'member',
              userPw: result.userPw,
              userName: result.userName
            })
          );
        }
      } else {
        dispatch(getUserInfo({ isLogin: 'guest' }));
      }
    });

    // 댓글 불러오기
    const getComments = async () => {
      const q = query(collection(db, 'comment'));
      onSnapshot(q, querySanpShot => {
        const initialPosts = [];
        querySanpShot.forEach(doc => {
          const post = {
            id: doc.id,
            ...doc.data()
          };
          initialPosts.push(post);
        });
        dispatch(getAllComment(initialPosts));
      });
    };
    getComments();
  }, [auth]);

  return <Router />;
}

export default App;
