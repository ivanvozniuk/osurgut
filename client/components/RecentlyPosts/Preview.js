import React from 'react';
import styled from '@emotion/styled';

import ContainerLayout from '../../layout/Container';
import ContentLayout from '../../layout/Content';

import Post from './Post';

export default ({ posts, action, ...props }) => {
  return (
    <Container {...props}>
      <Content>
        {posts.map(post => (
          <Block
            key={post._id}
            onClick={() => {
              action({ model: post.model, id: post._id });
            }}
          >
            <Post data={post} />
          </Block>
        ))}
      </Content>
    </Container>
  );
};

const Block = styled.div`
  width: calc(50% - 10px);
`;

const Container = styled(ContainerLayout)`
  max-width: 950px;
`;

const Content = styled(ContentLayout)`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
