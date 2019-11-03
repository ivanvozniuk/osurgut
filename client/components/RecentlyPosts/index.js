import React from 'react';
import styled from '@emotion/styled';

import Fluid from '../../layout/Fluid';

import Icon from '../../elements/Icon';

import PreviewComponent from './Preview';
import PostListComponent from './PostList';

export default ({ posts, active, changeActive, action }) => {
  return (
    <Wrapper>
      <Container>
        <Content isActive={active}>
          <Preview isActive={active} action={action} posts={posts.slice(0, 2)} />
          <PostList isActive={active} action={action} posts={posts} />
        </Content>
        <IconContainer isOpened={active} onClick={() => changeActive(!active)}>
          <OpenIcon active={active} size="18" name="arrow" />
        </IconContainer>
      </Container>
    </Wrapper>
  );
};

const Preview = styled(PreviewComponent)`
  @media all and (max-width: 900px) {
    display: none;
  }

  animation: ${({ theme }) => theme.fade} ${({ theme }) => theme.transitionFast};

  ${({ theme, isActive }) => `
    transition: ${theme.transitionFast};
    display: ${!isActive ? 'flex' : 'none'};
  `}
`;

const PostList = styled(PostListComponent)`
  position: relative;
  z-index: 1;

  animation: ${({ theme }) => theme.fade} ${({ theme }) => theme.transitionFast};

  ${({ theme, isActive }) => `
    transition: ${theme.transitionFast};
    display: ${isActive ? 'flex' : 'none'};
  `}
`;

const OpenIcon = styled(Icon)`
  transition: ${({ theme }) => theme.transitionFast};
  transform: rotate(${({ isOpened }) => (isOpened ? '180deg' : '0deg')});
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: calc(-10px - (45px));
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  background: #fff;

  ${({ theme }) => `
    transition: ${theme.transitionMedium};
    box-shadow: ${theme.mainShadow};

    &:hover {
      box-shadow: ${theme.mainShadowHover};
    }
  `}
`;

const Content = styled(Fluid)`
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.mainShadow};

  ${({ theme, isActive }) => `
    box-shadow: ${theme.mainShadow};
    transition: ${theme.transitionFast};
    height: ${isActive ? '60vh' : '70px'};

    @media all and (max-width: 900px) {
      height: ${isActive ? '60vh' : '0'};
    }
  `}
`;

const Container = styled.div`
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  @media all and (min-width: 901px) {
    height: 70px;
  }
`;
