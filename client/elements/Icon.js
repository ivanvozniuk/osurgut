import React from 'react';
import styled from '@emotion/styled';

export default ({ name, size, backgroundSize = 'cover', ...props }) => (
  <Icon {...props} size={size} src={`/static/svg/${name}.svg`} backgroundSize={backgroundSize} />
);

const Icon = styled.div`
  background-image: url(${({ src }) => src});
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: center center;
  background-repeat: no-repeat;
  min-width: ${({ size }) => (size ? `${size}px` : '100%')};
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${({ size }) => (size ? `${size}px` : '100%')};
`;
