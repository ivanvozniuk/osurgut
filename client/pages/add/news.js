import React from 'react';

import AddNewsFormContainer from '../../containers/AddNewsFormContainer';
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
            <AddNewsFormContainer />
          </Content>
        </Section>
      </Container>
    </DefaultComponents>
  </Layout>
);

export default AddNews;
