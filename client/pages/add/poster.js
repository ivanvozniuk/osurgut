import React from 'react';

import AddPosterFormContainer from '../../containers/AddPosterFormContainer';
import Layout from '../../layout/Layout';
import Container from '../../layout/Container';
import DefaultComponents from '../../layout/DefaultComponents';
import Content from '../../layout/Content';
import { Section } from '../../layout/Section';

const AddNews = () => (
  <Layout>
    <DefaultComponents>
      <Container>
        <Section>
          <Content>
            <AddPosterFormContainer />
          </Content>
        </Section>
      </Container>
    </DefaultComponents>
  </Layout>
);

export default AddNews;
