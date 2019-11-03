import React from 'react';

import styled from '@emotion/styled';

import ButtonElement from '../../elements/Button';

export default ({ children, active, action }) => (
  <Button active={active} onClick={action}>
    {children}
  </Button>
);
const Button = styled(ButtonElement)`
  color: ${({ active, theme }) => (active ? theme.darkestColor : theme.grayDarkColor)};
  margin-right: 27px;

  position: relative;
  min-width: max-content;
  text-align: center;
  height: 100%;
  padding: 0;
  transition: ${({ theme }) => {
    return ['color', 'opacity'].map(value => `${theme.transitionFast} ${value}`).join(', ');
  }};

  &:last-of-type {
    margin-right: 0;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    opacity: ${({ active }) => (active ? 1 : 0)};
    width: 100%;
    border-radius: 15px;
    height: 3px;
    bottom: 0;
    background-color: ${props => props.theme.primaryColor};
    left: 0;
    z-index: 5;
    transition: ${({ theme }) => theme.transitionFast};
  }
`;
