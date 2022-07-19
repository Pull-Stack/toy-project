import React from 'react';
import Text from '../common/Text';

const HashTag = ({ hashTag }) => {
  return (
    <Text
      size="20px"
      weight="500"
      color="#8694A7"
      lineHeight="27px"
      additionalStyle={{ marginRight: '10px' }}
    >
      {hashTag}
    </Text>
  );
};

export default HashTag;
