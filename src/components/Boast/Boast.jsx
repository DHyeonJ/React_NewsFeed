import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import InputImgSrc from '../../assets/pet.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';

function Boast() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(state => {
    return state.user;
  });
  const goToWrite = () => {
    if (user.isLogin === false) {
      alert('로그인이 필요합니다');
      navigate('/login');
    } else {
      navigate('/postWrite');
    }
  };
  useEffect(() => {
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
      setPosts(initialPosts);
    };

    fetchData();
  }, []);

  return (
    <>
      <Search>
        <Input src={InputImgSrc}></Input>
        <Keyword type="text" placeholder="입력하세요"></Keyword>
      </Search>
      <StLayout>
        <PostWrite>
          <PostWriteLink onClick={goToWrite}>글쓰기</PostWriteLink>
        </PostWrite>
        <FeedContainer>
          {posts
            .filter(post => {
              return post.category == '자랑 게시판';
            })
            .map(post => {
              return (
                <BoastPost
                  key={post.id}
                  onClick={() => {
                    return navigate(`/detailPage/${post.id}`);
                  }}
                >
                  <PostImg>{post.img}</PostImg>
                  <PostInfo>
                    <PostTitleBox>
                      <PostWriter>{post.userEmail}</PostWriter>
                    </PostTitleBox>
                    <PostTitle>{post.title}</PostTitle>
                  </PostInfo>
                </BoastPost>
              );
            })}
        </FeedContainer>
      </StLayout>
    </>
  );
}

export default Boast;
const PostTitleBox = styled.div`
  width: 150px;
`;
const PostTitle = styled.p`
  font-size: 20px;
  margin-left: 20px;
  color: black;
`;
const PostWrite = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const PostWriteLink = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #12263a;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
`;

const PostImg = styled.div`
  width: 570px;
  height: 300px;
  background-color: white;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  width: 570px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PostWriter = styled.p`
  /* width: 120px;
  height: 50px; */
  border-right: 2px solid #12263a;
  text-align: center;
  color: black;
`;

const BoastPost = styled.div`
  width: 570px;
  height: 370px;
  /* background-color: white; */
`;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const FeedContainer = styled.div`
  width: 1200px;
  /* height: 840px; */
  background-color: #12263a;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Search = styled.div`
  width: 100%;
  margin-bottom: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.img`
  width: 182px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Keyword = styled.input`
  border: 3px solid#f4d1ae;
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
`;
