import React from 'react';
import styled from '@emotion/styled';

import SlotParent from '../../containers/SlotParentContainer';
import Title from '../../elements/Title';

export default ({ slides, activeSlide, action, isSliderMobile }) => {
  return (
    <SlidesWrapper>
      <Slides activeSlide={activeSlide}>
        {slides.map(slide => (
          <Slide isMobile={isSliderMobile} offset={5}>
            {slide.map((smallSlide, index) => {
              const { _id: id, title, image } = smallSlide;
              return (
                <>
                  {slide.indexOf(smallSlide) === 0 ? (
                    <BigImage
                      key={id}
                      isWrapper
                      image={image}
                      isRadius={!isSliderMobile}
                      onClickImage={() => action(smallSlide)}
                      onClickFooter={() => action(smallSlide)}
                      Bottom={() => <Title isBig>{title}</Title>}
                    />
                  ) : (
                    <SmallImage
                      index={index}
                      key={id}
                      isWrapper
                      image={image}
                      isRadius={!isSliderMobile}
                      onClickImage={() => action(smallSlide)}
                      onClickFooter={() => action(smallSlide)}
                      Bottom={() => <Title isBig>{title}</Title>}
                    />
                  )}
                </>
              );
            })}
          </Slide>
        ))}
      </Slides>
    </SlidesWrapper>
  );
};

const Slides = styled.div`
  display: flex;
  transition: ${props => props.theme.transitionMedium};
  transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
  width: 100%;
`;

const SlidesWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
`;

const Slide = styled.div`
  min-width: calc(100% - ${({ offset }) => offset * 2}px);
  display: grid;
  margin: 0 ${({ offset }) => offset}px;
  grid-gap: 25px 20px;
  grid-template: 300px 300px / repeat(3, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template: 300px / repeat(4, 1fr);
    min-width: 400%;
    margin: 0;
    grid-gap: 0;
  }
`;

const BigImage = styled(SlotParent)`
  grid-column: 1/4;

  @media screen and (max-width: 1200px) {
    grid-column: initial;
  }
`;

const SmallImage = styled(SlotParent)`
  grid-column: ${({ index }) => index};
  grid-row: 2;

  @media screen and (max-width: 1200px) {
    grid-row: initial;
    grid-column: initial;
  }
`;
