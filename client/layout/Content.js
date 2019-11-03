/**
 * layout for default content by grid from design (has in itself adaptive padding)
 */
import React from 'react';
import styled from '@emotion/styled';

export default ({ children, mobileFull = false, ...props }) => (
  <Content {...props} mobileFull={mobileFull}>
    {children}
  </Content>
);

const Content = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media all and (max-width: 1200px) {
    padding-left: 0 ${({ mobileFull }) => (mobileFull ? 0 : '20px')};
    padding-right: 0 ${({ mobileFull }) => (mobileFull ? 0 : '20px')};
  }
`;
