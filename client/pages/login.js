import React from 'react';

import styled from '@emotion/styled';

import Full from '../layout/Full';
import Layout from '../layout/Layout';

import AuthLogin from '../containers/AuthLoginContainer';
import AuthSocial from '../containers/AuthSocialContainer';

export default () => (
  <Layout>
    <Background>
      <Full>
        <AuthLogin />
        <AuthSocial />
      </Full>
    </Background>
  </Layout>
);

const Background = styled.div`
  background-image: url('/static/images/auth-background.jpg');
  background-attachment: fixed;
  background-size: cover;
`;
