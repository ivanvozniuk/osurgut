import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import IconElement from '../../elements/Icon';
import theme from '../../theme';

export default ({ index, iconName, iconSize, placeholder, type, name }) => {
  const handleInput = e => {
    console.log(theme.darkColor);
    e.currentTarget.style.color = theme.darkColor;
  };
  return (
    <DateContainer>
      <Container>
        <Block>
          <DateHint>С</DateHint>
          <DateInput
            onClick={handleInput}
            index={index}
            type={type}
            placeholder={placeholder}
            name={name}
          />
        </Block>
        <Block>
          <DateHint>по</DateHint>
          <DateInput
            onClick={handleInput}
            index={index}
            type={type}
            placeholder={placeholder}
            name={name}
          />
        </Block>
      </Container>
      {iconName && <Icon size={iconSize} name={iconName} />}
    </DateContainer>
  );
};
const DateInput = styled(Input)`
  color: ${({ theme }) => theme.inputPlaceholder};
`;
const DateHint = styled.span`
  margin-top: 2.5px;
  margin-right: 5px;
  color: ${({ theme }) => theme.darkColor};
`;
const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Icon = styled(IconElement)`
  cursor: pointer;
  margin-left: auto;

  /* @media screen and (max-width: 380px) {
    display: none;
  } */
`;
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
const Block = styled.div`
  &:last-of-type {
    margin-left: 10px;
  }
  @media screen and (max-width: 560px) {
    &:last-of-type {
      margin-left: 0;
    }
  }
`;
