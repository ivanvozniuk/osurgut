import React, { useState } from 'react';
import Router from 'next/router';

import fetch from '../services/request';

import RecentlyPosts from '../components/RecentlyPosts';

export default ({ data = [], ...props }) => {
  const handleAction = ({ id }) => {
    Router.push('/news/[id]', `/news/${id}`, { shallow: true });
  };

  const [isOpen, setOpen] = useState(false);

  const handleChangeActive = () => {
    setOpen(!isOpen);
  };

  return (
    <RecentlyPosts
      active={isOpen}
      changeActive={handleChangeActive}
      posts={data}
      action={handleAction}
      {...props}
    />
  );
};

export const getInitialProps = async model => {
  const req = await fetch('/post/recenlty', {
    data: { model },
  });

  return {
    data: req.body.latest,
    isError: req.error,
  };
};
