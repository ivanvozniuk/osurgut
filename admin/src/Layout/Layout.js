import React from 'react';
import Menu from './Menu';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

export default withRouter(({ children, history }) => {
  return (
    <Layout>
      <Menu>
        <Content>{children}</Content>
      </Menu>
    </Layout>
  );
});

const Content = styled.div`
  padding: 50px 0;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Layout = styled.div`
  background-color: #3c0099;
`;
