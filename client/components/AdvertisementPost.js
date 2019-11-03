import React from 'react';

import styled from '@emotion/styled';

export default ({ imagePC, imageTablet, imageMobile, action }) => {
  const Image = styled.img`
    transition: ${props => props.theme.transitionFast};
    cursor: pointer;

    &:hover {
      opacity: ${props => props.theme.hoverOpacity};
    }
  `;
  return (
    <Image
      srcSet={`${imageMobile.image} ${imageMobile.media}w, ${imageTablet.image} ${imageTablet.media}w,
				${imagePC.image} ${imagePC.media}w`}
			sizes="(min-width: 1200px) 1200px, 100vw"
			onClick={() => action()}
    />
  );
};
