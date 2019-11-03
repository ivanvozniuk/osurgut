import React from 'react';

import styled from '@emotion/styled';

import SliderUI from './SliderUI';

export default ({
  slidesIds,
  activeSlide,
  action,
  Content,
  dotsMobileDisabled,
  arrowsDesktopDisabled,
}) => {
  return (
    <Container activeSlide={activeSlide}>
      <Content activeSlide={activeSlide} />
      <SliderUI
        slidesIds={slidesIds}
        activeSlide={activeSlide}
        action={action}
        arrowsDesktopDisabled={arrowsDesktopDisabled}
        dotsMobileDisabled={dotsMobileDisabled}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 32px;
`;
