import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../elements/Icon';

export default () => (
  <Container>
    <Icon name="share" size={18} />
    <Text>Поделиться</Text>
  </Container>
);

const Container = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  font-family: ${props => props.theme.medium};
  transition: ${props => props.theme.transitionFast};

  &:hover {
    opacity: ${props => props.theme.hoverOpacity};
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.darkColor};
  margin-left: 12px;

  @media all and (max-width: 360px) {
    display: none;
  }
`;
