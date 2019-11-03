import React from 'react';

import Router from 'next/router';
import SearchResultComponent from '../components/SearchResult';

const SearchResult = ({ posts, query }) => {
  const handleAction = (id, model) => {
    Router.push(`/${model}/[id]`, `/${model}/${id}`, { shallow: true });
  };
  return <SearchResultComponent posts={posts} action={handleAction} query={query} />;
};

export default SearchResult;
