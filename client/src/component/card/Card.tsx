import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Container>
      <div style={{ height: '90%' }}>
        <HashTagContainer>
          <HashTag>#온라인</HashTag>
          <HashTag>#IT</HashTag>
          <HashTag>#포트폴리오</HashTag>
        </HashTagContainer>
        <StyledTitle>토이 프로젝트 하실 분 구합니다.</StyledTitle>
        <StartContainer>
          <StartText>시작 예정일</StartText>
          <StartText>2022.07.06</StartText>
        </StartContainer>
        <InfoConatiner>
          <Info>화, 목</Info>
          <Info>오후 1시간</Info>
        </InfoConatiner>
      </div>
      <div>
        <Profile>이미지 sky123</Profile>
        <Profile>모집인원 2/5</Profile>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 350px;
  height: 377px;
  padding: 40px 30px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const HashTag = styled.span`
  font-size: 20px;
  color: #8694a7;
  margin-right: 10px;
  line-height: 27.24px;
  font-weight: 500;
`;

const HashTagContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledTitle = styled.h2`
  font-size: 30px;
  color: #2f3a4a;
  line-height: 44.86px;
  font-weight: 600;
  min-height: 89.72px;
  margin-bottom: 20px;
`;

const StartContainer = styled.div`
  margin-bottom: 20px;
`;

const StartText = styled.span`
  font-size: 22px;
  margin-right: 25px;
`;

const Info = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const InfoConatiner = styled.div`
  margin-bottom: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.span`
  font-size: 20px;
`;
