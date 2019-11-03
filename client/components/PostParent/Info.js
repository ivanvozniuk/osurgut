import React from 'react';

import styled from '@emotion/styled';
import Title from '../../elements/Title';

const PostHeader = ({ Bottom, Top, Right, title }) => (
  <Info>
    <Section>{Top && <Top />}</Section>
    <CenteredSection>
      <Section>
        <Title isIgnorAdaptive isBig>
          {title}
        </Title>
        {Bottom && <Bottom />}
      </Section>
      {Right && <Right />}
    </CenteredSection>
  </Info>
);

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;
const CenteredSection = styled(Section)`
  align-items: flex-start;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default PostHeader;
