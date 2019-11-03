import React from 'react';
import styled from '@emotion/styled';

import DateInfo from '../../elements/DateInfo';
import Title from '../../elements/Title';

export default ({ date, title }) => (
  <Container>
    <TitleContainer>
      <Title isBig>{title}</Title>
    </TitleContainer>
    <DateInfo date={date} />
  </Container>
);

const TitleContainer = styled.div`
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
  flex-direction: column;
  height: 100%;
`;
