import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import InputImgSrc from '../../assets/pet.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopButton from '../../components/TopButton/TopButton';
import noneImg from '../../assets/noneImg.png';

function Boast() {
  const posts = useSelector(state => state.postDatas);
  const divRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const offset = (currentPage - 1) * limit;
  const option = { root: null, rootMargin: '0px', threshold: 0.5 };
  const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setCurrentPage(prevPage => prevPage + 1);
        }, 500);
      }
    },
    {
      ...defaultOption,
      ...option
    }
  );

  useEffect(() => {
    observer.observe(divRef.current);
  }, []);
  const navigate = useNavigate();
  const user = useSelector(state => {
    return state.user;
  });

  const goToWrite = () => {
    if (user.isLogin === 'guest') {
      alert('로그인이 필요합니다');
      navigate('/login');
    } else {
      navigate('/postWrite/1');
    }
  };

  return (
    <BoastLayout>
      <BoastSearchBox>
        <Input src={InputImgSrc}></Input>
        <Keyword type="text" placeholder="입력하세요"></Keyword>
      </BoastSearchBox>
      <Content>
        <PostWriteBox>
          <PostWriteButton onClick={goToWrite}>글쓰기</PostWriteButton>
        </PostWriteBox>
        <FeedContainer>
          {posts
            .toSorted((a, b) => {
              const replaceA = a.date.replace(/[^0-9]/g, '');
              const replaceB = b.date.replace(/[^0-9]/g, '');
              return replaceA - replaceB;
            })
            .toReversed()
            .filter(post => {
              return post.category === '자랑 게시판';
            })
            .map(post => {
              return (
                <BoastPostBox
                  key={post.id}
                  onClick={() => {
                    return navigate(`/detailPage/${post.id}`);
                  }}
                >
                  <PostImgBox>
                    {post.img === null ? <PostImg src={noneImg} /> : <PostImg src={post.img} />}
                  </PostImgBox>
                  <PostInfoBox>
                    <PostTitleBox>
                      <PostWriter>{post.userName}</PostWriter>
                    </PostTitleBox>
                    <PostTitle>{post.title}</PostTitle>
                  </PostInfoBox>
                </BoastPostBox>
              );
            })
            .slice(0, offset + 10)}
          <div ref={divRef}></div>
        </FeedContainer>
        <MoveButtonBox>
          <TopButton />
        </MoveButtonBox>
      </Content>
    </BoastLayout>
  );
}

export default Boast;

const MoveButtonBox = styled.div`
  position: fixed;
  right: 40px;
  bottom: 100px;
`;
const PostTitleBox = styled.div`
  width: 150px;
`;
const PostTitle = styled.p`
  font-size: 20px;
  color: black;
`;
const PostWriteBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;
const PostWriteButton = styled.button`
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
const BoastLayout = styled.div``;
const PostImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 570px;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
`;
const PostImg = styled.img`
  width: 570px;
  height: 300px;
  object-fit: cover;
`;
const PostInfoBox = styled.div`
  width: 570px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
`;
const PostWriter = styled.p`
  text-align: center;
  color: black;
  font-weight: 600;
  border-right: 1px solid #12263a;
`;
const BoastPostBox = styled.div`
  width: 570px;
  height: 370px;
  background-color: #fff;
`;
const Content = styled.div`
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
  position: relative;
  width: 1200px;
  min-height: 840px;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
  background-color: #fafafa;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;
const BoastSearchBox = styled.div`
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
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
  font-size: 22px;
  border: 3px solid#A2BCE0;
  &:focus {
    outline: none;
    border: 3px solid#12263a;
  }
`;
