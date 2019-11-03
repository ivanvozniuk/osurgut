import React from 'react';

import Layout from '../../layout/Layout';
import DefaultComponents from '../../layout/DefaultComponents';
import Container from '../../layout/Container';
import Content from '../../layout/Content';
import { SectionSmall, Section } from '../../layout/Section';

import CategoryHeader from '../../components/CategoryHeader';
import WelcomeBar, {
  getInitialProps as getInitialPropsWelcomeBar,
} from '../../containers/WelcomeBarContaer';

import CategoryFastLinks, {
  getInitialProps as getInitialPropsCategoryLink,
} from '../../containers/CategoryFastLinksContainer';
import Slider, {
  getInitialProps as getInitialPropsSlider,
} from '../../containers/SliderListContainer';
import CategoryPost, {
  getInitialProps as getInitialPropsCategoryPost,
} from '../../containers/CategoryPostContainer';
import Compilation, {
  getInitialProps as getInitialPropsCompilation,
} from '../../containers/CompilationParentContainer';
import RecentlyPosts, {
  getInitialProps as getInitialPropsRecently,
} from '../../containers/RecentlyPostsContainer';

import NoSSR from '../../services/nossr';
import Fade from '../../layout/Fade';

const News = ({ slider, compilations }) => (
  <Layout>
    <DefaultComponents>
      <Container>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                size="50px"
                getInitialProps={() => getInitialPropsCategoryPost({}, 'news')}
                component={props => (
                  <Fade>
                    <CategoryPost {...props} />
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                size="125px"
                getInitialProps={getInitialPropsWelcomeBar}
                component={props => (
                  <Fade>
                    <CategoryHeader heading="Привет, сургутянин!" isBottomOffsetBig />
                    <WelcomeBar {...props} />
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                size="86px"
                getInitialProps={getInitialPropsCategoryLink}
                component={props => (
                  <Fade>
                    <CategoryFastLinks {...props} />
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
        <Section>
          <Fade>
            <Slider {...slider} />
          </Fade>
        </Section>
        {compilations.data.map(({ posts, _id: id, title }) => (
          <Section key={id}>
            <Fade>
              <Content>
                <Compilation heading={title} posts={posts} />
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

News.getInitialProps = async ({ ctx: { query } }) => {
  return {
    slider: await getInitialPropsSlider('news', query),
    compilations: await getInitialPropsCompilation('news', query),
  };
};

export default News;
