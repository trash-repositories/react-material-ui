import React from 'react';
import { Divider, Box, Button } from '@material-ui/core';

const BoxComponent = () => {
  return (
    <div>
      <h1>Box</h1>
      <p>Box 구성 요소는 대부분의 CSS 유틸리티 요구사항에 대한 wrapper 컴포넌트 역할을 합니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <Box component="span" m={1}>
        <Button />
      </Box>
    </div>
  );
};

export default BoxComponent;