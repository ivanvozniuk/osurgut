import React from 'react';
import styled from '@emotion/styled';

import WeatherInfo from '../../containers/WeatherInfoContainer';
import HotPost from '../../containers/HotPostContainer';
import CurrentCity from '../../containers/CurrentCityContainer';

export default ({ weather, hotpost, ...props }) => {
  return (
    <Container {...props}>
      <CurrentCityWrapper>
        <CurrentCity />
      </CurrentCityWrapper>
      <WeatherInfoWrapper>
        <WeatherInfo {...weather} />
      </WeatherInfoWrapper>

      <HotPostWrapper>
        <HotPost {...hotpost} />
      </HotPostWrapper>
    </Container>
  );
};

const CurrentCityWrapper = styled.div`
  min-width: 280px;
  margin-right: 15px;

  @media all and (max-width: 780px) {
    min-width: 180px;
  }
`;

const WeatherInfoWrapper = styled.div`
  min-width: 85px;
  margin-right: 15px;

  @media all and (max-width: 620px) {
    margin-right: 0;
  }
`;

const HotPostWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  height: 57px;

  @media all and (max-width: 620px) {
    height: 57px;
    margin-top: 15px;
    flex-grow: 0;
    width: auto;
  }
`;

const Container = styled.div`
  display: flex;

  @media all and (max-width: 620px) {
    flex-wrap: wrap;
  }
`;
