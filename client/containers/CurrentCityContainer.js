import React from 'react';
import CurrentCity from '../components/CurrentCity';

export default () => {
  const cities = [
    {
      name: 'Москва',
      id: '1',
      link: 'http://www.google.com',
    },
    {
      name: 'Питер',
      id: '2',
      link: 'http://www.google.com',
    },
    {
      name: 'Тюмень',
      id: '3',
      link: 'http://www.google.com',
    },
    {
      name: 'Владивосток',
      id: '4',
      link: 'http://www.google.com',
    },
    {
      name: 'Чернига',
      id: '5',
      link: 'http://www.google.com',
    },
  ];
  const activeCity = 'Сургут';
  return <CurrentCity activeCity={activeCity} cities={cities} />;
};
