import React from 'react';
import styled from '@emotion/styled';

import SlotParent from '../../containers/SlotParentContainer';
import ContentLayout from '../../layout/Content';
import DateInfo from '../../elements/DateInfo';
import Title from '../../elements/Title';

export default ({ post, action }) => {
  const { date, title, image } = post;
  return (
    <ContentLayout mobileFull>
      <Container>
        <SlotParent
          image={image}
          isWrapper
          isBig
          isRadius={false}
          onClickImage={() => action()}
          Bottom={() => (
            <>
              <TitleContainer>
                <Title isBig>{title}</Title>
              </TitleContainer>
              <DateInfo date={date} />
            </>
          )}
        />
      </Container>
    </ContentLayout>
  );
};

const TitleContainer = styled.div`
  margin-bottom: 15px;
`;

const Container = styled.div`
  height: 420px;
  overflow: hidden;
  border-radius: 35px;
  width: 100%;

  @media all and (max-width: 1200px) {
    border-radius: 0px;
    height: 320px;
  }
`;
