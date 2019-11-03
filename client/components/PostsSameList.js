import React from 'react';

import styled from '@emotion/styled';

import PostSame from './PostSame';

const PostsSameList = ({ postsSame }) => (
  <List>
    {postsSame.map(post => (
      <PostSame key={post.id} {...post} />
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default PostsSameList;
