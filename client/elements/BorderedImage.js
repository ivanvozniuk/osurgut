import React from 'react';

import styled from '@emotion/styled';

const BorderedImage = ({ onlyBottom = false, isRadius = true, ...props }) => (
  <Img onlyBottom={onlyBottom} isRadius={isRadius} {...props} />
);

const Img = styled.img`
  border-radius: ${({ isRadius, theme }) => {
    return isRadius ? theme.imageBorderRadius : 0;
  }};
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default BorderedImage;
