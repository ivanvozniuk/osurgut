import React from 'react';

import styled from '@emotion/styled';

import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import PostViews from './Views';

export default ({ likes, views }) => (
  <Container>
    <LikeButtonContainer>
      <LikeButton value={likes} />
    </LikeButtonContainer>

    <ShareButtonContainer>
      <ShareButton />
    </ShareButtonContainer>

    <PostViewsContainer>
      <PostViews value={views} />
    </PostViewsContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
`;

const LikeButtonContainer = styled.div``;

const ShareButtonContainer = styled.div`
  margin-left: 20px;
`;

const PostViewsContainer = styled.div`
  margin-left: auto;
  display: flex;
`;
