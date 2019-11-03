import React from 'react';
import styled from '@emotion/styled';

export default ({ price, ...props }) => <Price {...props}>{price}</Price>;

const Price = styled.div`
  margin-top: 15px;
  font-size: 16px;
`;
