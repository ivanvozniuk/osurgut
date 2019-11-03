import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import fetch from '../services/request';

import CategoryHeader from '../components/CategoryHeader';
import SliderParentContainer from './SliderParentContainer';
import SliderList from '../components/SliderList';
import Button from '../elements/ActionButton';
import Content from '../layout/Content';

export default ({ data, ...props }) => {
  const [isSliderMobile, setIsSliderMobile] = useState(false);

  useEffect(() => setIsSliderMobile(window.innerWidth < 1200), []);

  const handleAction = ({ id, model }) => {
    Router.push(`/${model}/[id]`, `/${model}/${id}`, { shallow: true });
  };

  return (
    <>
      <Content>
        <CategoryHeader
          heading="Лента новостей"
          RightSide={() => (
            <ButtonsContainer>
              <Button iconName="filter_time" isPrimary={false} text="По времени" />
              <ButtonAction text="Запостить" iconName="plus" isPrimary isActive />
            </ButtonsContainer>
          )}
        />
      </Content>
      <SliderParentContainer
        {...props}
        slidesIds={
          isSliderMobile
            ? data.flat().map((_data, index) => index)
            : data.map((_data, index) => index)
        }
        Content={({ activeSlide }) => (
          <SliderList
            isSliderMobile={isSliderMobile}
            activeSlide={activeSlide}
            slides={data}
            action={handleAction}
          />
        )}
        dotsMobileDisabled
        arrowsDesktopDisabled
      />
    </>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
`;
const ButtonAction = styled(Button)`
  margin-left: 15px;
`;

export const getInitialProps = async type => {
  const req = await fetch('/slide/get', {
    data: { type },
  });

  return {
    data: req.body.slider.map(({ posts }) => posts),
    isError: req.error,
  };
};
