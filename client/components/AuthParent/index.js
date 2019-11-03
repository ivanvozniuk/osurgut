import React from 'react';

import styled from '@emotion/styled';

import Form from './Form';

export default ({ ...props }) => (
  <Container>
    <Form {...props} />
  </Container>
);

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
