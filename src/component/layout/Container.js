import React from 'react';
import { Divider, CssBaseline, Typography, Container } from '@material-ui/core';

const BoxComponent = () => {
  return (
    <div>
      <h1>Container</h1>
      <p>컨테이너는 컨텐츠를 수평 중앙에 배치합니다. 가장 기본적인 레이아웃 요소입니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
      <Divider />
      <h1>API</h1>
      {`import Box from '@material-ui/core/Box'`}
    </div>
  );
};

export default BoxComponent;