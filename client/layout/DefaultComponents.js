/**
 * layout for defaulting components such as Header, Footer etc
 */
import React from 'react';
import styled from '@emotion/styled';

import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';
import Fade from './Fade';

export default ({ children, ...props }) => (
  <Layout {...props}>
    <Fade>
      <Header />
    </Fade>
    {children}
    <Fade>
      <Footer />
    </Fade>
  </Layout>
);

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
