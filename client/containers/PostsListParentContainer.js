import React, { useEffect, useState, useContext } from 'react';
import fetch from '../services/request';
import { ActiveLinkContext } from './CategoryPostContainer';

import CompilationParentContainer from './CompilationParentContainer';

const PostsListContainer = ({ model }) => {
  const [response, setResponse] = useState({});
  const category = useContext(ActiveLinkContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/post/list', {
        data: { model, category: category.length === 0 ? null : category },
      });

      setResponse(res);
    };
    fetchData();
  }, [category]);


  return (
    <>
      {response.status && (
				response.status == 404 ? (
					<h1>{response.body.errors.error}</h1>
				) : (
					<CompilationParentContainer
						isCategoryHeader={false}
						posts={response.body.posts || []}
						model={model}
					/>
				)
			)}
    </>
  );
};

export default PostsListContainer;
