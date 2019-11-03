import React from 'react';

import AdvertisementPost from '../components/AdvertisementPost';

export default () => {
  const imagePC = {
    image: '/static/images/test1.jpg',
    media: 1200,
  };
  const imageTablet = {
    image: '/static/images/test2.jpg',
    media: 720,
  };
  const imageMobile = {
    image: '/static/images/test3.jpg',
    media: 320,
  };

  const action = value => {
    return value;
	};
	
  return (
    <AdvertisementPost
      action={action}
      imagePC={imagePC}
      imageTablet={imageTablet}
      imageMobile={imageMobile}
    />
  );
};
