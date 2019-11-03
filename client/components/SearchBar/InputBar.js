import React from 'react';

import styled from '@emotion/styled';

import Icon from '../../elements/Icon';
import Input from '../../elements/Input';
import ContainerLayout from '../../layout/Container';

export default ({ active, value, changeActive, action, inputChange }) => {
  return (
    <Container>
      <InputBlock onSubmit={action} active={active}>
        <Input placeholder="Найдется все" action={inputChange} value={value} />
        <IconContainer>
          <Icon onClick={action} name="search" />
        </IconContainer>
        <IconContainer>
          <Icon onClick={changeActive} name="close" />
        </IconContainer>
      </InputBlock>
    </Container>
  );
};

const Container = styled(ContainerLayout)`
  height: 100%;
`;

const IconContainer = styled.button`
  height: 18px;
  min-width: 18px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium} opacity;
  margin-left: 10px;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

const InputBlock = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  background-color: #230159;
  border-radius: 100px;
  padding: ${({ theme }) => theme.inputPadding};
  align-items: center;
  color: #fff;
  font-size: 14px;
`;
