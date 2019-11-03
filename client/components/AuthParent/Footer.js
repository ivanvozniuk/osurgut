import React from 'react';

import styled from '@emotion/styled';

import Link from 'next/link';

export default ({ links }) => (
  <Container>
    {links.map(({ id, text, link }) => (
      <Link key={id} href={link}>
        <Text>{text}</Text>
      </Link>
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.span`
  cursor: pointer;
  color: #fff;
  font-size: 14px;

  transition: ${props => props.theme.transitionMedium};

  &:hover {
    opacity: ${props => props.theme.hoverOpacity};
  }
`;
