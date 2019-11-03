import React from 'react';
import Router from 'next/router';
import fetch from '../services/request';

import SliderParentContainer from './SliderParentContainer';
import SliderSingle from '../components/SliderSingle';
import ActionButton from '../elements/ActionButton';
import CategoryHeader from '../components/CategoryHeader';
import Content from '../layout/Content';

const SliderHomeContainer = ({ data = null, heading }) => {
  const handleAction = ({ _id, model }) => {
    Router.push(`/${model}/[id]`, `/${model}/${_id}`, { shallow: true });
  };

  return (
    <>
      <Content>
        <CategoryHeader
          heading={heading}
          RightSide={() => <ActionButton iconName="filter_time" text="По времени" />}
        />
      </Content>
      <SliderParentContainer
        slidesIds={data.map((_data, index) => index)}
        Content={({ activeSlide }) => (
          <SliderSingle activeSlide={activeSlide} slides={data} action={handleAction} />
        )}
      />
    </>
  );
};

export const getInitialProps = async type => {
  const req = await fetch('/slide/get', {
    data: { type },
  });

  return {
    data: req.body.slider.map(({ posts }) => posts[0]),
    isError: req.error,
  };
};

export default SliderHomeContainer;
