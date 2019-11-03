import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import Fluid from '../layout/Fluid';

export default ({ children, isLoading, isTransparent = false, ...props }) => {
  return (
    <Container isLoading={isLoading} {...props}>
      <Skeleton active={isLoading && isTransparent === false} />
      {children}
    </Container>
  );
};

const shine = keyframes`
  0% {
    background-color: rgba(240, 240, 240, 0.5);
  }
  50% {
    background-color: rgba(240, 240, 240, 1);
  }
  100% {
    background-color: rgba(240, 240, 240, 0.5);
  }
`;

const Container = styled(Fluid)`
  width: 100%;
  ${({ theme, image = false, size, isLoading }) => `
    height: ${isLoading === false ? 'auto' : size || '50px'};
    border-radius: ${image ? theme.imageBorderRadius : '5px'};
  `}
  position: relative;
`;

const Skeleton = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${shine} 1.6s infinite ease-out;
`;
