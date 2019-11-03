import React from 'react';
import PostParent from '../components/PostParent/index';

export default ({
  image,
  title,
  content,
  likes,
  views,
  headerTop,
  headerBottom,
  headerRight,
  footer,
}) => {
  return (
    <PostParent
      image={image}
      headerTop={headerTop}
      headerBottom={headerBottom}
      headerRight={headerRight}
      title={title}
      content={content}
      likes={likes}
      views={views}
      footer={footer}
    />
  );
};
