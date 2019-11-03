import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import { SectionSmall, Section } from '../../layout/Section';

import Slider, {
  getInitialProps as getInitialPropsSlider,
} from '../../containers/SliderSingleContainer';
import Compilation, {
  getInitialProps as getInitialPropsCompilation,
} from '../../containers/CompilationParentContainer';
import RecentlyPosts, {
  getInitialProps as getInitialPropsRecently,
} from '../../containers/RecentlyPostsContainer';
import CategoryPost, {
  getInitialProps as getInitialPropsCategoryPost,
} from '../../containers/CategoryPostContainer';

import NoSSR from '../../services/nossr';
import Fade from '../../layout/Fade';

const Posters = ({ slider, compilations }) => (
  <Layout>
    <DefaultComponents>
      <Container>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                size="50px"
                getInitialProps={() => getInitialPropsCategoryPost({}, 'poster')}
                component={props => (
                  <Fade>
                    <CategoryPost {...props} />
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
        <Section>
          <Fade>
            <Slider heading="Случайные мероприятия" {...slider} />
          </Fade>
        </Section>
        {compilations.data.map(({ posts, title, model }) => (
          <Section>
            <Fade>
              <Content>
                <Compilation heading={title} posts={posts} model={model} />
              </Content>
            </Fade>
          </Section>
        ))}
      </Container>
    </DefaultComponents>
    <NoSSR
      size="0px"
      getInitialProps={() => getInitialPropsRecently('news')}
      component={props => <RecentlyPosts {...props} />}
    />
  </Layout>
);

Posters.getInitialProps = async ({ ctx: { query } }) => {
  return {
    slider: await getInitialPropsSlider('posters', query),
    compilations: await getInitialPropsCompilation('posters', query),
  };
};

export default Posters;
