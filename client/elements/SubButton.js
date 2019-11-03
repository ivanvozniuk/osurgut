import React from 'react';
import styled from '@emotion/styled';
import ParentButton from './Button';

export default ({ children, ...props }) => <Button {...props}>{children}</Button>;

const Button = styled(ParentButton)`
  color: ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.lightColor};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
  display: flex;
`;
