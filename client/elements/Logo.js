import React from 'react';
import styled from '@emotion/styled';

import Link from 'next/link';

const Logo = ({ isBig = false }) => (
  <Link href="/">
    <Logotype isBig={isBig}>
      <img alt="О, Сургут!" src="/static/images/logo.png" />
    </Logotype>
  </Link>
);

const Logotype = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transitionMedium} opacity;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  & img {
    height: ${({ isBig }) => (isBig ? '60px' : '40px')};
    width: ${({ isBig }) => (isBig ? '60px' : '40px')};
  }
`;

export default Logo;
