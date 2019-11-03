/**
 * layout for adaptive container with width by grid from design maket
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children, ...props }) => <Container {...props}>{children}</Container>;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;

  margin: 0 auto;
`;
