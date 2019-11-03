import React from 'react';
import styled from '@emotion/styled';

export default ({ isSmall = false, heading, RightSide, isBottomOffsetBig }) => (
  <Container isBottomOffsetBig={isBottomOffsetBig}>
    <Heading isSmall={isSmall}>{heading}</Heading>
    {RightSide && <RightSide />}
  </Container>
);

const Heading = styled.strong`
  font-weight: 600;
  margin-right: 10px;
  font-size: ${({ isSmall }) => (isSmall ? '21px' : '27px')};
  color: ${({ theme }) => theme.darkestColor};

  @media all and (max-width: 580px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ isBottomOffsetBig }) => (isBottomOffsetBig ? '40px' : '20px')};
  width: 100%;

  @media all and (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
