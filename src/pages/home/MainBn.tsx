import React from 'react';
import styled from 'styled-components';
// import MainBN from '/src/assets/images/MainBN.png';
// import mapleTown from '@assets/images/mapleTown3.mp4';

const MainBn = () => {
  return (
    <MainBnBox autoPlay loop muted>
      <source src="/src/assets/images/mapleTownVideo4.mp4" type="video/mp4" />
      {/* <Title>떡잎마을 형제들이 알고싶다.</Title>
      <TextContent>
        다같이 환경보호 커뮤니티를
        <br /> 만들어보아요!!
      </TextContent> */}
    </MainBnBox>
  );
};

export default MainBn;

const MainBnBox = styled.video`
  width: 100%;
  height: 700px;
  background-size: 100% 100%;
  margin-top: 83px;
  span {
    font-family: 'BMDOHYEON';
    color: #fff;
    text-align: center;
    width: 100%;
    display: block;
  }
`;

const Title = styled.span`
  font-size: 25px;
  padding-top: 200px;
`;

const TextContent = styled.span`
  font-size: 40px;
  padding-top: 20px;
`;
