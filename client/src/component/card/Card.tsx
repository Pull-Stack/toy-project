import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import HashTag from './HashTag';
import ScheduleInfo from './ScheduleInfo';
import StartDate from './StartInfo';
import Profile from './Profile';

const Card = () => {
  return (
    <Container
      width="290px"
      height="297px"
      padding="40px 30px"
      additionalStyle={{ background: 'red' }}
    >
      <Container additionalStyle={{ marginBottom: '10px' }}>
        <HashTag hashTag="#포트폴리오" />
        <HashTag hashTag="#개발" />
        <HashTag hashTag="#독서" />
      </Container>
      <StyledTitle>토이 프로젝트 하실 분 구합니다.</StyledTitle>
      <StartDate date="2022.07.06" />
      <ScheduleInfo date="화, 목" time="오후 1시간" />
      <Profile id="sky123" people="1/2" />
    </Container>
  );
};

export default Card;

const StyledTitle = styled.h2`
  font-size: 30px;
  color: #2f3a4a;
  line-height: 44.86px;
  font-weight: 600;
  min-height: 89.72px;
  margin-bottom: 20px;
`;
