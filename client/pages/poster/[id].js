import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Fluid from '../../layout/Fluid';
import Content from '../../layout/Content';
import PostPoster, {
  getInitialProps as getInitialPropsPostPosters,
} from '../../containers/PostPosterContainer';

const PosterPage = ({ posters }) => (
  <Layout>
    <DefaultComponents>
      <Fluid>
        <Content>
          <PostPoster {...posters} />
        </Content>
      </Fluid>
    </DefaultComponents>
  </Layout>
);

PosterPage.getInitialProps = async ({ ctx: { query } }) => {
  return {
    posters: await getInitialPropsPostPosters(query),
  };
};

export default PosterPage;
