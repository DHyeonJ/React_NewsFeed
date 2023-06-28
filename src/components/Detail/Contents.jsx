import React from 'react';
import { styled } from 'styled-components';
import pet2 from '../../assets/pet2.png';
import loading from '../../assets/loadingW.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Contents() {
  window.scrollTo(0, 0);
  const posts = useSelector(state => state.postDatas);
  const param = useParams();
  const post = posts.find(doc => {
    return doc.id === param.id;
  });

  if (post === undefined) {
    return (
      <Section>
        <TitleWrapper>
          <Writer></Writer>
          <Title></Title>
        </TitleWrapper>
        <ContentWrapper style={{display: 'flex', justifyContent: 'center'}}>
          <img src={loading} width='250px' height='230px' paddingTop='40px' />
        </ContentWrapper>
        <Img src={pet2}></Img>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <TitleWrapper>
          <Writer>{post.userEmail}</Writer>
          <Title>{post.title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          {!post.img && (
            <ContentImg src="https://modo-phinf.pstatic.net/20161227_17/1482824657944M2RjC_JPEG/mosaJxz9vM.jpeg?type=w720"></ContentImg>
          )}
          <p>{post.content}</p>
        </ContentWrapper>
        <Img src={pet2}></Img>
      </Section>
    </>
  );
}

export default Contents;
const Img = styled.img`
  pointer-events: none;
  width: 100px;
  height: 200px;
  position: absolute;
  top: 110px;
  right: -63px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Writer = styled.span`
  margin: 0 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-left: 20px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ContentImg = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  position: relative;
`;
