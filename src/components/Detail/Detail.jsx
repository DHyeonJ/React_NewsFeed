import React, { useEffect, useState } from 'react';
import Contents from './Contents';
import Form from './CommentForm';
import CommentsList from './CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAllPost } from '../../redux/modules/posts';

const Detail = () => {
  const param = useParams();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const post = useSelector(state => {
    const matchPost = state.postDatas.find(doc => doc.id === param.id);
    return matchPost;
  });
  useEffect(() => {
    const updatePost = async () => {
      try {
        const collectionRef = doc(db, 'posts', post.id);
        await updateDoc(collectionRef, { views: post.views + 1 });
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
      } catch (error) {
        console.log(error);
      }
    };
    if (post != null) updatePost();
  }, []);
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState({
    isIt: false,
    item: {}
  });

  const editCommentBtnHandler = item => {
    setIsEdit({ isIt: true, item });
    setText(item.comment);
  };
  return (
    <>
      <Contents post={post} param={param} />
      <Form text={text} setText={setText} isEdit={isEdit} setIsEdit={setIsEdit} post={post} />
      <CommentsList editCommentBtnHandler={editCommentBtnHandler} />
    </>
  );
};

export default Detail;
