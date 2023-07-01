import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import noneImg from '../../../assets/noneImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Section = ({ posts, name }) => {
  const navigate = useNavigate();

  return (
    <HomeSection>
      <SectionTitle>
        <FontAwesomeIcon icon={faPaw} style={{ color: '#12263a' }} />
        &nbsp;
        {name}
      </SectionTitle>
      <PostList>
        {posts.map(post => {
          return (
            <PostBox onClick={() => navigate(`/detailPage/${post.id}`)}>
              <ImgBox>
                <PostImg src={post.img === null ? noneImg : post.img}></PostImg>
              </ImgBox>
              <PostName>{post.title}</PostName>
            </PostBox>
          );
        })}
      </PostList>
    </HomeSection>
  );
};

export default Section;

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px;
  color: #12263a;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

const PostList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 216px;
  height: 300px;
  text-align: center;
  border: 1px solid #f4d1ae;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;

const PostImg = styled.img`
  width: 214px;
  height: 254px;
  object-fit: contain;
`;

const PostName = styled.p`
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  color: #12263a;
  border-top: 1px solid #f4d1ae;
`;
