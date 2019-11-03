/**
 * Full screen for auth container
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children, ...props }) => <Full {...props}>{children}</Full>;

const Full = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 50px 12px;
`;
