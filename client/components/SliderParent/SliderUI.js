import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../elements/Icon';

export default ({ slidesIds, activeSlide, action }) => {
  const handleChangeDot = number => {
    action(number);
  };

  const handleChangeToPrev = () => {
    action('prev');
  };

  const handleChangeToNext = () => {
    action('next');
  };

  return (
    <>
      <DotsList>
        {slidesIds.map(index => (
          <Dot onClick={() => handleChangeDot(index)} key={index} active={index === activeSlide} />
        ))}
      </DotsList>
      <ArrowLeft onClick={handleChangeToPrev}>
        <IconContainer>
          <Icon name="slider-arrow" />
        </IconContainer>
      </ArrowLeft>
      <ArrowRight onClick={handleChangeToNext}>
        <IconContainer>
          <Icon name="slider-arrow" />
        </IconContainer>
      </ArrowRight>
    </>
  );
};

const DotsList = styled.div`
  display: flex;
  position: absolute;
  top: calc(100% + 20px);
  width: 100%;
  left: 0;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Dot = styled.button`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#502398' : '#d9d9d9')};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme, active }) => (active ? 1 : theme.hoverOpacity)};
  }
`;

const ArrowButton = styled.button`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background: #1e1e1e;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - (60px / 2));
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme, active }) => (active ? 1 : theme.hoverOpacity)};
  }

  @media all and (max-width: 1200px) {
    width: 40px;
    height: 100%;
    background: transparent;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    top: 0;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const ArrowRight = styled(ArrowButton)`
  left: calc(100% - (60px / 2));

  @media all and (max-width: 1200px) {
    left: calc(100% - 40px);
  }
`;

const ArrowLeft = styled(ArrowButton)`
  right: calc(100% - (60px / 2));
  transform: rotate(180deg);

  @media all and (max-width: 1200px) {
    right: calc(100% - 40px);
    height: 100%;
  }
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  @media all and (max-width: 720px) {
    width: 16px;
    height: 16px;
    top: 0;
  }
`;
