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
        <FontAwesomeIcon icon={faPaw} style={{ color: '#ffffff' }} />
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
  gap: 20px;
  width: 100%;
  padding: 20px;
  color: #ffffff;
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
  border: 2px solid #f4d1ae;
  border-radius: 10px 10px 0 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 234px;
  border-radius: 10px 10px 0 0;
`;

const PostImg = styled.img`
  min-width: 150px;
  max-width: 196px;
  min-height: 150px;
  max-height: 210px;
`;

const PostName = styled.p`
  width: 100%;
  padding: 20px 0;
  font-size: 18px;
  text-align: center;
  color: white;
  border-top: 2px solid #f4d1ae;
`;
