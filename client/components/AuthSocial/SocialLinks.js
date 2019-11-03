import React from 'react';

import styled from '@emotion/styled';

export default ({ action, links }) => (
  <>
    {links.map(({ id, Icon, type }) => {
      return (
        <Container
          onClick={() => {
            action(type);
          }}
          key={id}
        >
          <Icon />
        </Container>
      );
    })}
  </>
);

const Container = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  height: ${({ theme }) => theme.length}px;
  transition: ${props => props.theme.transitionFast};

  &:hover {
    opacity: ${props => props.theme.hoverOpacity};
  }
`;
