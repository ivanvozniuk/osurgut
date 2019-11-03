import React from 'react';

import AddPostFormParentContainer from './AddPostFormParentContainer';

const fields = {
  inputs: [
    {
      type: 'text',
      placeholder: 'Заголовок вашего поста',
      title: 'Заголовок вашей афиши',
      errorText: 'Some error text',
      name: 'title',
    },
    [
      {
        type: 'text',
        placeholder: 'Например: Театр Сургут',
        title: 'Место проведения',
        name: 'address',
      },
      {
        type: 'text',
        placeholder: 'Например: 1500 руб.',
        title: 'Цена',
        name: 'price',
      },
    ],
    [
      {
        type: 'text',
        placeholder: 'Например: +7 918 123 12 34',
        title: 'Контактный телефон',
        name: 'contact',
      },
      {
        type: 'text',
        placeholder: 'Например: vk.com/event12312312',
        title: 'Мероприятие в соцсетях',
        name: 'social',
      },
    ],
    [
      {
        type: 'text',
        placeholder: 'Например: osurgut.com',
        title: 'Веб-сайт',
        name: 'website',
      },
      {
        type: 'text',
        title: 'Дата и время мероприятия',
        placeholder: 'Введите дату и время',
        iconSize: '18',
        name: 'date',
      },
    ],
    {
      type: 'file',
      title: 'Загрузить фотографию',
      placeholder: 'Фотография — .jpg, .png',
      iconName: 'camera',
      iconSize: '20',
      name: 'image',
    },
    {
      type: 'textarea',
      placeholder: 'Анонс мероприятия',
      title: 'Текст',
      name: 'body',
    },
  ],
  buttons: [
    {
      text: 'Отправить на модерацию',
    },
  ],
};

export default () => <AddPostFormParentContainer heading="Добавить афишу" {...fields} />;
