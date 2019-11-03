import React from 'react';
import styled from '@emotion/styled';

import CompilationPosts from '../CompilationPost';

const SearchResult = ({ query, posts, action }) => (
  <Container>
    <Query>«{query}»</Query>
    <PostsWrapper>
      <CompilationPosts action={action} data={posts} />
    </PostsWrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Query = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.grayDarkColor};
`;
const PostsWrapper = styled.div``;

export default SearchResult;
