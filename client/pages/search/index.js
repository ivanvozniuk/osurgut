import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import { SectionSmall } from '../../layout/Section';
import SearchResult from '../../containers/SearchResultContainer';
import CategoryHeader from '../../components/CategoryHeader';

const SearchResultPage = ({ query }) => (
  <Layout>
    <DefaultComponents>
      <Container>
        <SectionSmall>
          <Content>
            <CategoryHeader heading="Результаты по запросу:" />
            <SearchResult query={query} />
          </Content>
        </SectionSmall>
      </Container>
    </DefaultComponents>
  </Layout>
);

SearchResultPage.getInitialProps = async ({
  ctx: {
    query: { query },
  },
}) => {
  return {
    query,
  };
};

export default SearchResultPage;
