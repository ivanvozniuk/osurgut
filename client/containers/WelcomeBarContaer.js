import React from 'react';
import WelcomeBar from '../components/WelcomeBar';

import { getInitialProps as getInitialPropsWeatherInfo } from './WeatherInfoContainer';
import { getInitialProps as getInitialPropsHotPost } from './HotPostContainer';

export default ({ ...props }) => {
  return <WelcomeBar {...props} />;
};

export const getInitialProps = async query => {
  return {
    weather: await getInitialPropsWeatherInfo(query),
    hotpost: await getInitialPropsHotPost(query),
  };
};
