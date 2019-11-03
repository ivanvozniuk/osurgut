import React from 'react';
import styled from '@emotion/styled';

export default ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const Button = styled.button`
  height: 100%;
  display: block;
  padding: ${({ theme }) => theme.buttonPadding};
  font-family: ${props => props.theme.medium};
  transition: ${({ theme }) => theme.transitionMedium} opacity;
  letter-spacing: 0.01em;
  white-space: nowrap;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
