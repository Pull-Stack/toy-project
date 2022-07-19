import React from 'react';
import Container from '../common/Container';
import Text from '../common/Text';

const ScheduleInfo = ({ date, time }) => {
  return (
    <Container
      flexInfo={['row', 'auto', 'space-between', 'no-wrap']}
      additionalStyle={{ marginBottom: '47px' }}
    >
      <Text size="20px" weight="400" color="#583858" lineHeight="27.24px">
        {date}
      </Text>
      <Text size="20px" weight="400" color="#583858" lineHeight="27.24px">
        {time}
      </Text>
    </Container>
  );
};

export default ScheduleInfo;
