import React from 'react';

import CategoryParentContainer from '../../containers/CategoryParentContainer';
import Button from './Button';

export default ({ links, action, activeLink }) => (
  <CategoryParentContainer>
    {links.map(({ id, name, type, value }) => (
      <Button active={activeLink === value} action={() => action(value, type)} key={id}>
        {name}
      </Button>
    ))}
  </CategoryParentContainer>
);
