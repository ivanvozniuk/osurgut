import React from 'react';

import styled from '@emotion/styled';

import SlotParentContainer from '../../containers/SlotParentContainer';

export default ({ title, onClick, ...props }) => (
  <Container>
    <SlotParent
      onClickImage={onClick}
      onClickFooter={onClick}
      Footer={() => <Title>{title}</Title>}
      {...props}
      imageHeight="300px"
      isWrapper
    />
  </Container>
);

const Title = styled.h2`
  color: ${({ theme }) => theme.darkestColor};
  font-size: 22px;
  margin-top: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SlotParent = styled(SlotParentContainer)`
  width: 100%;
`;
