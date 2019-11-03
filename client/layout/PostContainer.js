/**
 * layout for post content
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children }) => <PostContainer>{children}</PostContainer>;

const PostContainer = styled.article`
  padding: 0 50px;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
