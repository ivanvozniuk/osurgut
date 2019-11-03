import React from 'react';
import styled from '@emotion/styled';
import PostContainer from '../../layout/PostContainer';

import Header from './Header';
import Body from './Body';
import PostFooter from './Footer';

export default ({
  title,
  image,
  headerTop,
  headerBottom,
  headerRight,
  content,
  footer: Footer,
  views,
  likes,
}) => {
  return (
    <PostContainer>
      <HeaderSection>
        <Header
          title={title}
          image={image}
          top={headerTop}
          right={headerRight}
          bottom={headerBottom}
        />
      </HeaderSection>
      <BodySection>
        <Body content={content} />
      </BodySection>
      <FooterSection>
        <PostFooter views={views} likes={likes} />
      </FooterSection>
      {Footer && <Footer />}
    </PostContainer>
  );
};

const HeaderSection = styled.section`
  margin-bottom: 50px;
`;

const BodySection = styled.section`
  margin-bottom: 50px;
`;

const FooterSection = styled.section`
  margin-bottom: 35px;
`;
