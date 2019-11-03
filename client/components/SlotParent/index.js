import React from 'react';
import styled from '@emotion/styled';

import Image from '../../elements/BorderedImage';

export default ({
  isWrapper,
  Top,
  Bottom,
  Footer,
  image,
  onClickImage,
  onClickFooter,
  isBig = false,
  isRadius = true,
  imageHeight,
  className,
}) => (
  <>
    <Container className={className} imageHeight={imageHeight} onClick={onClickImage}>
      <ImageWrapper isRadius={isRadius} active={isWrapper}>
        <Image isRadius={isRadius} src={image} alt="Slot image" />
      </ImageWrapper>
      <Content isBig={isBig}>
        <Section>{Top && <Top />}</Section>
        <Section>{Bottom && <Bottom />}</Section>
      </Content>
    </Container>
    {Footer && (
      <FooterWrapper>
        <Footer onClick={onClickFooter} />
      </FooterWrapper>
    )}
  </>
);

const Container = styled.div`
  min-width: 100%;
  height: ${({ imageHeight }) => imageHeight || '100%'};
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: 0.9;
  }
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
`;
const Content = styled.div`
  padding: ${({ isBig }) => (isBig ? '35px' : '20px')};
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
const ImageWrapper = styled.div`
  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: ${({ active }) => (active ? 'block' : 'none')};
    border-radius: ${({ isRadius, theme }) => (isRadius ? theme.imageBorderRadius : 0)};
  }
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ isRadius, theme }) => (isRadius ? theme.imageBorderRadius : 0)};
`;

const FooterWrapper = styled.div`
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme, active }) => (active ? 1 : theme.hoverOpacity)};
  }
`;
