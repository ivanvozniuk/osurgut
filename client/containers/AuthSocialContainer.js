import React from 'react';

import AuthSocial from '../components/AuthSocial';

import Icon from '../elements/Icon';

export default () => {
  const links = [
    {
      id: 0,
      Icon: () => <Icon name="google" size={24} />,
      type: 'google',
    },
    {
      id: 1,
      Icon: () => <Icon name="vkontakte" size={24} />,
      type: 'vkontakte',
    },
    {
      id: 2,
      Icon: () => <Icon name="facebook" size={24} />,
      type: 'facebook',
    },
    {
      id: 3,
      Icon: () => <Icon name="instagram" size={24} />,
      type: 'instagram',
    },
  ];

  const handleAction = type => {
    console.log(type);
  };

  return (
    <>
      <AuthSocial links={links} action={handleAction} />
    </>
  );
};
