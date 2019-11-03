import React from 'react';
import fetch from '../services/request';

import PostPoster from '../components/PostPoster';

export default ({ isError, data }) => {
  return isError ? (
    <div>Афиша не найдена</div>
  ) : (
    <PostPoster
      image={data.image}
      title={data.title}
      content={data.body}
      likes={data.likes}
      views={data.views}
      address={data.address}
      date={data.date}
      nextDate={data.nextDate}
      price={data.price}
    />
  );
};

export const getInitialProps = async query => {
  const { id } = query;

  const res = await fetch('/post/get', {
    data: { id, model: 'poster' },
  });

  return {
    data: res.body.post,
    isError: res.error,
  };
};
