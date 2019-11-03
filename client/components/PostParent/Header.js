import React from 'react';

import styled from '@emotion/styled';
import Image from '../../elements/BorderedImage';
import Info from './Info';

const PostHeader = ({ image, title, top, bottom, right }) => (
  <Container>
    <ImageWrapper>
      <Image isRadius={false} src={image} alt="Post image" />
    </ImageWrapper>
    <Content>
      <Info title={title} Top={top} Bottom={bottom} Right={right} />
    </Content>
  </Container>
);

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Container = styled.div`
  padding: 60px 0;
  height: 420px;

  @media all and (max-width: 721px) {
    padding: 30px 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 420px;
  overflow: hidden;

  &:after {
    content: '';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 720px) {
    border-radius: ${({ theme }) => `0 0 ${theme.imageBorderRadius} ${theme.imageBorderRadius}`};
  }
`;

export default PostHeader;
