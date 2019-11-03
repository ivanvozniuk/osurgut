import React from 'react';

import AddPostFormParentContainer from './AddPostFormParentContainer';

const fields = {
  inputs: [
    {
      type: 'text',
      placeholder: 'Заголовок вашего поста',
      title: 'Заголовок',
      name: 'title',
    },
    {
      type: 'file',
      placeholder: 'Фотография — .jpg',
      title: 'Фотография',
      iconName: 'camera',
      iconSize: '20',
      name: 'photo',
    },
    {
      type: 'textarea',
      placeholder: 'Текст новости. Просто начните писать — мы обязательно выложим его.',
      title: 'Текст',
      name: 'description',
    },
  ],
  buttons: [
    {
      text: 'Отправить новость',
    },
    {
      text: 'Выложить в VK без ожидания',
      isPrimary: true,
      isLink: true,
      href: 'https://www.google.com',
    },
  ],
};

export default () => <AddPostFormParentContainer heading="Запостить" {...fields} />;
