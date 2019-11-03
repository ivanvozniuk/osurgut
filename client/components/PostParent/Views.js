import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../elements/Icon';

export default ({ value }) => (
  <Container>
    <Icon name="views" size={18} />
    <Number>{value}</Number>
  </Container>
);

const Number = styled.span`
  color: ${({ theme }) => theme.darkColor};
  margin-left: 12px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
