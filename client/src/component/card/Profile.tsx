import React from 'react';
import Text from '../common/Text';
import Container from '../common/Container';

const Profile = ({ id, people }) => {
  return (
    <Container flexInfo={['row', 'center', 'space-between', 'no-wrap']}>
      <Text size="20px" weight="400" color="#000000" lineHeight="27.24px">
        이미지 {id}
      </Text>
      <Text size="20px" weight="400" color="#9E9E9E" lineHeight="27.24px">
        모집인원 {people}
      </Text>
    </Container>
  );
};

export default Profile;
