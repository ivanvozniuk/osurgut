import React, { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

export default ({ children, isBorder, className, reference, ...props }) => {
  const containerRef = useRef(null);
  const [isScroll, setIsScroll] = useState(null);

  useEffect(() => {
    setIsScroll(containerRef.current.scrollWidth > containerRef.current.clientWidth);
  });

  return (
    <Wrapper ref={reference} isScroll={isScroll} isBorder={isBorder} {...props}>
      <Container className={className} ref={containerRef}>
        {children}
      </Container>
    </Wrapper>
  );
};
const Container = styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  &::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &:after,
  &:before {
    ${({ isScroll }) => isScroll && 'content: ""'};
    position: absolute;
    pointer-events: none;
    height: 100%;
    z-index: 10;
    top: 0;
  }
  &:before {
    width: 20px;
    left: 0;
    background-image: linear-gradient(to right, #fff, transparent);
  }
  &:after {
    width: 20px;
    right: 0;
    background-image: linear-gradient(to right, transparent, #fff);
  }
`;
