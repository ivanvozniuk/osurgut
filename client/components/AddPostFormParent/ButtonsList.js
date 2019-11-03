import React from 'react';
import styled from '@emotion/styled';

import SubButton from '../../elements/SubButton';
import SecondButton from '../../elements/SecondButton';

export default ({ buttons }) => {
  const Button = styled(SecondButton)`
    height: 50px;
    margin-bottom: 20px !important;
    width: auto;
    margin-right: 20px;

    &:last-of-type {
      margin-bottom: 0 !important;
    }
  `;

  return (
    <Container>
      {buttons.map(({ text, isPrimary, isLink, href }) => {
        const ButtonStyled = Button.withComponent(isPrimary ? SubButton : SecondButton);

        return (
          <ButtonStyled
            onClick={() => {
              if (isLink) {
                window.location.href = href;
              }
            }}
          >
            {text}
          </ButtonStyled>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
