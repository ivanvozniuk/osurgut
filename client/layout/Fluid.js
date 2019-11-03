/**
 * layout for fluid container
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children, ...props }) => <Fluid {...props}>{children}</Fluid>;

const Fluid = styled.div`
  width: 100%;
  position: relative;
`;
