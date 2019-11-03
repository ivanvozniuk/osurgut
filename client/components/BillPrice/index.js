import React from 'react';
import styled from '@emotion/styled';

export default ({ price, className }) => <Price className={className}>{price}</Price>;

const Price = styled.div`
  background: linear-gradient(172.57deg, #febf66 -37.56%, #f8973e 90.34%);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.35);
  border-radius: 35px 7px;
  line-height: 50px;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
