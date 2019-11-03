import React from 'react';
import styled from '@emotion/styled';

import fetch from '../services/request';

export default ({ data, ...props }) => {
  if (data < 0) {
    data = `-${data}°C`;
  } else if (data > 0) {
    data = `+${data}°C`;
  } else if (data === 0) {
    data = `${data}°C`;
  }

  return <Container {...props}>{data}</Container>;
};

export const getInitialProps = async () => {
  const req = await fetch('/common/weather', {
    data: { type: null },
  });

  return {
    data: req.body.weather,
    isError: req.error,
  };
};

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  font-size: 15px;

  ${({ theme }) => `
    background-color: ${theme.thirdColor};
    box-shadow: ${theme.mainShadow};
  `}
`;
