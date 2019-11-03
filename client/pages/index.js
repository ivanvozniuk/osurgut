import React from 'react';

import Layout from '../layout/Layout';
import DefaultComponents from '../layout/DefaultComponents';
import Container from '../layout/Container';
import Content from '../layout/Content';
import { SectionSmall, SectionAlone, Section } from '../layout/Section';

import Slider, {
  getInitialProps as getInitialPropsSlider,
} from '../containers/SliderSingleContainer';
import Banner, { getInitialProps as getInitialPropsBanner } from '../containers/BannerContainer';
import CategoryPost, {
  getInitialProps as getInitialPropsCategory,
} from '../containers/CategoryPostContainer';
import PhotoDay, {
  getInitialProps as getInitialPropsPhotoDay,
} from '../containers/PhotoDayContainer';
import RecentlyPosts, {
  getInitialProps as getInitialPropsRecently,
} from '../containers/RecentlyPostsContainer';
import Compilation, {
  getInitialProps as getInitialPropsCompilation,
} from '../containers/CompilationParentContainer';
import NoSSR from '../services/nossr';
import Fade from '../layout/Fade';

const Home = ({ banners, photoday, slider, compilations }) => (
  <Layout>
    <DefaultComponents>
      <Container>
        <SectionSmall>
          <Content>
            <Fade>
              <NoSSR
                getInitialProps={getInitialPropsCategory}
                component={props => (
                  <Fade>
                    <CategoryPost {...props} />
                  </Fade>
                )}
              />
            </Fade>
          </Content>
        </SectionSmall>
        <Section />
      </Container>
      <SectionAlone>
        <Fade>
          <Banner {...banners} type="global" />
        </Fade>
      </SectionAlone>
      <Container>
        <Section>
          <Fade>
            <Slider heading="Лента новостей" {...slider} />
          </Fade>
        </Section>
        <Section>
          <Fade>
            <PhotoDay {...photoday} />
          </Fade>
        </Section>
        {compilations.data.map(({ title, _id: id, ...compilation }) => (
          <Section key={id}>
            <Fade>
              <Content>
                <Compilation heading={title} {...compilation} />
              </Content>
            </Fade>
          </Section>
        ))}
        <Section>
          <Content>
            <Fade>
              <Banner {...banners} type="order" />
            </Fade>
          </Content>
        </Section>
      </Container>
    </DefaultComponents>
    <NoSSR
      size="0px"
      getInitialProps={() => getInitialPropsRecently('news')}
      component={props => <RecentlyPosts {...props} />}
    />
  </Layout>
);

Home.getInitialProps = async ({ ctx: { query } }) => {
  return {
    banners: await getInitialPropsBanner(query),
    slider: await getInitialPropsSlider('home', query),
    photoday: await getInitialPropsPhotoDay(query),
    category: await getInitialPropsCategory('news', query),
    compilations: await getInitialPropsCompilation('home', query),
  };
};

export default Home;
