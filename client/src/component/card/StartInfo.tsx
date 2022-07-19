import React from 'react';
import Container from '../common/Container';
import Text from '../common/Text';

const StartDate = ({ date }) => {
  return (
    <Container additionalStyle={{ marginBottom: '20px' }}>
      <Text
        size="22px"
        weight="600"
        color="#333D4B"
        lineHeight="29.96px"
        additionalStyle={{ marginRight: '25px' }}
      >
        시작 예정일
      </Text>
      <Text size="22px" weight="600" color="#333D4B" lineHeight="29.96px">
        {date}
      </Text>
    </Container>
  );
};

export default StartDate;
