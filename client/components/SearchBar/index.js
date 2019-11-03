import React, { useState } from 'react';

import styled from '@emotion/styled';

import Icon from '../../elements/Icon';
import InputBar from './InputBar';

const SearchInput = ({ active, value, action, changeActive }) => {
  const [inputValue, changeInputValue] = useState(value);

  const handleChaneActive = () => {
    if (inputValue.length < 3 && active === true) {
      changeInputValue('');
    }
    changeActive(!active);
  };

  const handleAction = e => {
    e.preventDefault();
    if (inputValue.length > 3) {
      action(inputValue);
    }
  };

  const handleInputChange = e => {
    changeInputValue(e.target.value);
  };

  return (
    <SearchBlock>
      <IconContainer onClick={handleChaneActive}>
        <Icon name="search" />
      </IconContainer>
      <InputContainer active={active}>
        <InputBar
          active={active}
          value={inputValue}
          action={handleAction}
          changeActive={handleChaneActive}
          inputChange={handleInputChange}
        />
      </InputContainer>
    </SearchBlock>
  );
};

export default SearchInput;

const SearchBlock = styled.div`
  display: flex;
`;
const IconContainer = styled.button`
  height: 18px;
  width: 18px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium} opacity;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

const InputContainer = styled.div`
  position: absolute;
  left: 0;
  top: ${({ active }) => (active ? 0 : '-70px')};
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 15px;
  transition: ${({ theme }) => theme.transitionFast} top;
`;
