import React from 'react';
import styled from '@emotion/styled';

export default ({ children, isBig, isIgnorAdaptive = false }) => (
  <Title isIgnorAdaptive={isIgnorAdaptive} isBig={isBig}>
    {children}
  </Title>
);

const Title = styled.h3`
  font-weight: bold;
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontBig : theme.fontSmall)};
  line-height: 1.25em;
  color: #fff;
  max-width: 70%;

  @media all and (max-width: 720px) {
    font-size: ${({ theme, isIgnorAdaptive, isBig }) => {
      if (isIgnorAdaptive) return isBig ? theme.fontBig : theme.fontSmall;
      else return theme.fontSmall;
    }};
    max-width: 100%;
  }
`;
