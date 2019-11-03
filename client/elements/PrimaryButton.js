import React from 'react';
import styled from '@emotion/styled';

import ButtonElement from './Button';

export default ({ type, children, isLink, href, ...props }) => (
  <Button type={type} isLink={isLink} {...props}>
    {children}
  </Button>
);
const Button = styled(ButtonElement)`
  height: 100%;
  border-radius: 2222px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.bold};
  position: relative;
  color: #fff;
  background: ${({ theme }) => theme.primaryColor};
`;
