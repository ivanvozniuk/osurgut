import React from 'react';

import styled from '@emotion/styled';

import IconArrowDown from '../assets/next_post.svg';
import PostsSameList from './PostsSameList';

const PostsSameBlock = ({ postsSame }) => (
  <PostsSameContainer>
    <Heading>Похожие новости</Heading>
    <PostsSameList postsSame={postsSame} />
    <ShowMorePosts>
      <ShowMorePostsText>Следующая новость</ShowMorePostsText>
      <IconArrowDown />
    </ShowMorePosts>
  </PostsSameContainer>
);

const ShowMorePostsText = styled.span`
  color: #a6a6a6;
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.bold};
  margin-bottom: 25px;
`;
const ShowMorePosts = styled.button`
  margin-top: 160px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PostsSameContainer = styled.div`
  margin: 40px 0 60px;
`;
const Heading = styled.h2`
  font-size: 22px;
  font-family: ${props => props.theme.semi};
  margin-bottom: 35px;
`;

export default PostsSameBlock;
