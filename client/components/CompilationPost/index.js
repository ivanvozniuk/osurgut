import React from 'react';
import styled from '@emotion/styled';

import Item from './Item';

export default ({ data, action, ...props }) => (
  <Container {...props}>
    {data.map(post => (
      <Item
        onClick={() => {
          action(post._id, post.model);
        }}
        {...post}
      />
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
