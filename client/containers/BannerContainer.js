import React from 'react';
import fetch from '../services/request';

import Banner from '../components/Banner';

const BannerContainer = ({ type, ...props }) => {
  const {
    data: { [type]: data },
  } = props;

  const action = () => {
    window.location.href = data.link;
  };

  return (
    <Banner
      action={action}
      isBig={type === 'global'}
      isRadius={type !== 'global'}
      image={data.image}
    />
  );
};

export const getInitialProps = async () => {
  const dataOrder = await fetch('/banner/get', {
    data: { type: 'order' },
  });

  const dataGlobal = await fetch('/banner/get', {
    data: { type: 'global' },
  });

  return {
    data: {
      order: dataOrder.body.banner,
      global: dataGlobal.body.banner,
    },
    isError: dataOrder.error || dataGlobal.error,
  };
};

export default BannerContainer;
