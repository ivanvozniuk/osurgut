import React from 'react';

import styled from '@emotion/styled';
import Fade from '../layout/Fade';

export default ({ error, ...props }) => (
  <Fade>
    <ErrorMessage error={!!error} {...props}>
      {error && error}
    </ErrorMessage>
  </Fade>
);

const ErrorMessage = styled.div`
  font-size: 16px;
  min-height: 18px;
  transition: ${({ theme }) => theme.transitionFast};
  color: ${({ theme }) => theme.red};
  opacity: ${({ error }) => (error ? 1 : 0)};
  line-height: 1.35em;
`;
