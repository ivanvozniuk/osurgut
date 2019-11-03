import React from 'react';
import styled from '@emotion/styled';

import SliderContent from './Content';
import SlotParent from '../../containers/SlotParentContainer';

export default ({ slides, activeSlide, action }) => (
  <SlidesWrapper>
    <Slides activeSlide={activeSlide}>
      {slides.map(slide => {
        const { _id: id, date, title, image } = slide;
        return (
          <SlotParent
            key={id}
            image={image}
            isWrapper
            isBig
            isRadius={false}
            onClickImage={() => action(slide)}
            onClickFooter={() => action(slide)}
            Bottom={() => <SliderContent date={date} title={title} />}
          />
        );
      })}
    </Slides>
  </SlidesWrapper>
);
const Slides = styled.div`
  display: flex;
  transition: ${props => props.theme.transitionMedium};
  transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
  height: 320px;
  width: 100%;
`;
const SlidesWrapper = styled.div`
  overflow: hidden;
  border-radius: 35px;
  width: 100%;
  height: auto;

  @media all and (max-width: 1200px) {
    border-radius: 0px;
  }
`;
