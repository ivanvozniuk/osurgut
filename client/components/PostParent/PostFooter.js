import React from 'react';

import styled from '@emotion/styled';

import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import PostViews from './Views';

const PostFooter = ({ postLikes, postViews }) => (
  <PostFooterContainer>
    <LikeButtonContainer>
      <LikeButton postLikes={postLikes} />
    </LikeButtonContainer>
    <ShareButtonContainer>
      <ShareButton />
    </ShareButtonContainer>
    <PostViewsContainer>
      <PostViews postViews={postViews} />
    </PostViewsContainer>
  </PostFooterContainer>
);

const PostViewsContainer = styled.div`
  margin-left: auto;
  @media screen and (max-width: 420px) {
    margin-left: 0;
  }
`;
const ShareButtonContainer = styled.div`
  @media screen and (max-width: 420px) {
    order: -1;
  }
`;
const PostFooterContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const LikeButtonContainer = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 420px) {
    margin: 15px 0;
  }
`;

export default PostFooter;
