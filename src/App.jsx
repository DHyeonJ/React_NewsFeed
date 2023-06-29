import { collection, getDocs, query } from 'firebase/firestore';
import { db, auth } from './firebase';
import Router from './shared/Router';
import { getAllPost } from './redux/modules/posts';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from './redux/modules/user';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  console.log(auth);
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.user;
  });
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
    // photoUrl 불러오기
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

      const result = initialUsers.find(user => user.uid == uid);
      return result;
    };

    onAuthStateChanged(auth, async state => {
      if (state) {
        const { email, uid } = state;
        const result = await userFetch(uid);
        console.log(result, result.photoUrl, 66);
        dispatch(
          getUserInfo({
            email,
            photoURL: result.photoUrl,
            uid,
            docId: result.id,
            isLogin: 'member'
          })
        );
      } else {
        dispatch(getUserInfo({ isLogin: 'guest' }));
      }
    });
  }, [auth]);

  return <Router />;
}

export default App;
