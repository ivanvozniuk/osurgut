import React from 'react';

import Header from '../components/Header';

import Icon from '../elements/Icon';

export default () => {
  const items = [
    {
      title: 'Новости',
      path: '/news',
      Icon: () => <Icon name="news" />,
      id: 0,
    },
    {
      title: 'Афиши',
      path: '/poster',
      Icon: () => <Icon name="posters" />,
      id: 1,
    },
    {
      title: 'Фильмы',
      path: '/films',
      Icon: () => <Icon name="films" />,
      id: 2,
    },
    {
      title: 'Сообщество',
      path: '/forum',
      Icon: () => <Icon name="forum" />,
      id: 3,
    },
  ];

  return <Header menuItems={items} />;
};
