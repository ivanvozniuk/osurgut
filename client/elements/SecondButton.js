import React from 'react';
import styled from '@emotion/styled';
import ParentButton from './Button';

export default ({ children, ...props }) => <Button {...props}>{children}</Button>;

const Button = styled(ParentButton)`
  color: #fff;
  background-color: ${({ theme }) => theme.thirdColor};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
  transition: box-shadow ${({ theme }) => theme.transitionMedium},
    opacity ${({ theme }) => theme.transitionMedium};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.07);

  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  }
`;
