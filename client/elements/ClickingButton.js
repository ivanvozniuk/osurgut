import React, { useState } from 'react';

import styled from '@emotion/styled';

export default ({ children, ...props }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <Button isClicked={isClicked} onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

const Button = styled.div`
  transition: ${({ theme }) => theme.transitionFast} opacity;
  opacity: ${({ isClicked }) => (isClicked ? 0.5 : 1)};
`;
