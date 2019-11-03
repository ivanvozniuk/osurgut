/**
 * main layout
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children, ...props }) => <Layout {...props}>{children}</Layout>;

const Layout = styled.div`
  position: relative;
`;
