import React from 'react';

import styled from '@emotion/styled';

import CategoryParentContainer from '../../containers/CategoryParentContainer';
import Button from './Button';

export default ({ links, action, activeLink, children }) => {
  return (
    <Container>
      <CategoryParentContainer>
        {links.map(({ id, name, type, value }) => (
          <Button key={id} active={activeLink === value} action={() => action(value, type)}>
            {name}
          </Button>
        ))}
      </CategoryParentContainer>
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  border-bottom: 1px solid #e3e3e3;
`;
