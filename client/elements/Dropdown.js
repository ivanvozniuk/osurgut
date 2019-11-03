import React, { useState } from 'react';
import styled from '@emotion/styled';

export default ({ header: Header, children, default: defaultValue = null }) => {
  const [isActive, setActive] = useState(defaultValue);

  return (
    <Container>
      <Header
        isActive={isActive}
        onClick={() => {
          setActive(!isActive);
        }}
      />
      <Content isActive={isActive}>{children}</Content>
    </Container>
  );
};

const Content = styled.div`
  width: 100%;
  height: auto;
  position: absolute;

  ${({ isActive, theme }) => `
		top: calc(100% + ${isActive ? '0px' : '8px'});
		transition: ${theme.transitionFast};
		opacity: ${isActive ? 1 : 0};
		pointer-events: ${isActive ? 'unset' : 'none'};
	`}
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  width: auto;
  height: auto;
  z-index: 1;
`;
