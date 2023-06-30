import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../redux/modules/posts';

const Dots = ({ param }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const afterSubmit = async () => {
    const q = query(collection(db, 'posts'));
    const querySnapShot = await getDocs(q);
    const initialPosts = [];
    querySnapShot.forEach(doc => {
      const post = {
        id: doc.id,
        ...doc.data()
      };
      initialPosts.push(post);
    });
    dispatch(getAllPost(initialPosts));
    navigate(-1);
  };

  const deletePost = async id => {
    const check = window.confirm('정말 삭제하시겠습니까?');
    if (!check) return false;

    const postRef = doc(db, 'posts', id);
    await deleteDoc(postRef);
    await afterSubmit()
    navigate('/');
  };
  return (
    <DotArea>
      <DotsWrapper onClick={isOpenHandler} onBlur={() => setIsOpen(false)}>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
      {isOpen && (
        <Options>
          <Option onMouseDown={() => navigate(`/postWrite/${param.id}`)}>수정</Option>
          <Option onMouseDown={() => deletePost(param.id)}>삭제</Option>
        </Options>
      )}
    </DotArea>
  );
};

export default Dots;

const Option = styled.li`
  text-align: center;
  padding: 5px;
  font-size: 15px;
  &:hover {
    background-color: #dcdcdc;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
const Options = styled.ul`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 40px;
  width: 50px;
  border: 0.5px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Dot = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`;
const DotsWrapper = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 10px;
  background-color: #fff;
`;
const DotArea = styled.div`
  position: relative;
`;
