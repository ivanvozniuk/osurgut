import React from 'react';

import styled from '@emotion/styled';

export default ({ action, image, isRadius = true, isBig = false }) => {
  return <Image img={{ ...image }} isBig={isBig} isRadius={isRadius} onClick={action} />;
};

const Image = styled.div`
  border-radius: ${({ theme, isRadius }) => (isRadius ? theme.imageBorderRadius : 0)};
  width: 100%;
  height: ${({ isBig }) => (isBig ? '200px' : '90px')};
  transition: ${props => props.theme.transitionMedium};
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &:hover {
    opacity: ${props => props.theme.hoverOpacity};
  }

  @media all and (max-width: 1920px) {
    background-image: url(${({ img }) => img.big});
  }

  @media all and (max-width: 1280px) {
    background-image: url(${({ img }) => img.large});
  }

  @media all and (max-width: 768px) {
    background-image: url(${({ img }) => img.medium});
    height: ${({ isBig }) => (isBig ? '160px' : '100px')};
  }

  @media all and (max-width: 480px) {
    background-image: url(${({ img }) => img.small});
  }
`;
