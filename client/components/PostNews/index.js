import React from 'react';

import PostParentContainer from '../../containers/PostParentContainer';
import Author from './Author';
import DateInfo from '../../elements/DateInfo';

export default ({ image, title, content, likes, views, author, link, date }) => {
  return (
    <PostParentContainer
      image={image}
      headerTop={() => (
        <>
          <DateInfo date={date} />
          <Author value={author} link={link} />
        </>
      )}
      title={title}
      content={content}
      likes={likes}
      views={views}
      footer={() => <div>footer</div>}
    />
  );
};

export const getInitialProps = async query => {
  const { id } = query;

  const req = await fetch('/post/get', {
    data: { id, model: 'news' },
  });

  return {
    data: req.body.post,
    isError: req.error,
  };
};
