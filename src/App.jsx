import { collection, getDocs, query } from 'firebase/firestore';
import { db, auth } from './firebase';
import Router from './shared/Router';
import { getAllPost } from './redux/modules/posts';
import { useDispatch } from 'react-redux';
import { getUserInfo } from './redux/modules/user';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // post 정보 불러오기
    const fetchData = async () => {
      const q = query(collection(db, 'posts'));
      const quertSnapShot = await getDocs(q);
      const initialPosts = [];
      quertSnapShot.forEach(doc => {
        const post = {
          id: doc.id,
          ...doc.data()
        };
        initialPosts.push(post);
      });
      dispatch(getAllPost(initialPosts));
    };
    fetchData();
    //  유저 정보 불러오기
    onAuthStateChanged(auth, state => {
      if (state) {
        const { email, uid, photoURL } = state;
        dispatch(getUserInfo({ email, uid, photoURL, isLogin: 'member' }));
      } else {
        dispatch(getUserInfo({ isLogin: 'guest' }));
      }
    });
  }, [auth]);

  return <Router />;
}

export default App;
