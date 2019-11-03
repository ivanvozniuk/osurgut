import React from 'react';
import styled from '@emotion/styled';

import ContainerLayout from '../../layout/Container';
import ContentLayout from '../../layout/Content';

import Icon from '../../elements/Icon';

import PostComponent from './Post';

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
            <Post isBig data={post} />
            <HotIcon isActive={post.hot} name="hot" size="16" />
          </Block>
        ))}
      </Content>
    </Container>
  );
};

const Post = styled(PostComponent)`
  width: calc(100% - 30px);
`;

const HotIcon = styled(Icon)`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

const Block = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `1px solid ${theme.grayColor}`};
`;

const Container = styled(ContainerLayout)`
  max-width: 950px;
  overflow-y: scroll;
  height: 100%;
`;

const Content = styled(ContentLayout)`
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: scroll;
`;
