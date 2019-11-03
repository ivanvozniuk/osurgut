import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Fluid from '../../layout/Fluid';
import Content from '../../layout/Content';
import PostNews, {
  getInitialProps as getInitialPropsPostNews,
} from '../../containers/PostNewsContainer';

const PostNewsPage = ({ news }) => (
  <Layout>
    <DefaultComponents>
      <Fluid>
        <Content>
          <PostNews {...news} />
        </Content>
      </Fluid>
    </DefaultComponents>
  </Layout>
);

PostNewsPage.getInitialProps = async ({ ctx: { query } }) => {
  return {
    news: await getInitialPropsPostNews(query),
  };
};

export default PostNewsPage;
