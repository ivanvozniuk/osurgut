import React from 'react';

import styled from '@emotion/styled';

import ButtonElement from '../../elements/Button';

export default ({ children, active, action }) => (
  <Button active={active} onClick={action}>
    {children}
  </Button>
);
const Button = styled(ButtonElement)`
  padding: 12px 20px;
  color: ${({ active, theme }) => (active ? theme.orange : theme.grayDarkColor)};
  border: ${({ active, theme }) => {
    return active ? `1px solid ${theme.orange}` : '1px solid transparent';
  }};
  border-radius: 25px;
  min-width: max-content;
  text-align: center;
  height: 100%;
`;
