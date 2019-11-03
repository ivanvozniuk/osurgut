import React from 'react';
import styled from '@emotion/styled';

export default ({ value, link, ...props }) => (
  <Author href={link} {...props}>
    {value}
  </Author>
);

const Author = styled.a`
  margin: 15px 0;
  color: rgba(255,255,255,.75);
  font-size: 22px;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;
