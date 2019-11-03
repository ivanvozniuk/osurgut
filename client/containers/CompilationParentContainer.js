import React from 'react';
import Router from 'next/router';

import fetch from '../services/request';

import CategoryHeader from '../components/CategoryHeader';
import ActionButton from '../elements/ActionButton';
import CompilationPost from '../components/CompilationPost';

export default ({ heading, model, posts = [], isCategoryHeader = true }) => {
  const handleAction = id => {
    const href = `/${model}/[id]`;
    const as = `/${model}/${id}`;
    Router.push(href, as, { shallow: true });
  };

  return (
    <>
			{isCategoryHeader && (
				<CategoryHeader
					heading={heading}
					RightSide={() => <ActionButton isActive isPrimary={false} text="Показать всё" />}
				/>
			)}
      <CompilationPost action={handleAction} data={posts} />
    </>
  );
};

export const getInitialProps = async type => {
  const req = await fetch('/compilation/get', {
    data: { type },
  });

  return {
    data: req.body.compilation,
    model: req.body,
    isError: req.error,
  };
};
