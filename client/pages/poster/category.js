import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Fade from '../../layout/Fade';
import NoSSR from '../../services/nossr';
import { SectionSmall, Section } from '../../layout/Section';

import CategoryPost, {
  getInitialProps as getInitialPropsCategory,
} from '../../containers/CategoryPostContainer';
import PostersList from '../../containers/PostersListContainer';

const Category = () => (
  <Layout>
    <DefaultComponents>
      <Container>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                getInitialProps={() => getInitialPropsCategory({}, 'poster')}
                component={props => (
                  <Fade>
                    <CategoryPost {...props} model="poster">
                      <Section>
                        <PostersList />
                      </Section>
                    </CategoryPost>
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
      </Container>
    </DefaultComponents>
  </Layout>
);

Category.getInitialProps = async ({ ctx: { query } }) => {};

export default Category;
