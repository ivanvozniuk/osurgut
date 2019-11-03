import React from 'react';

import styled from '@emotion/styled';

import Footer from './Footer';
import InputsList from './InputsList';

import Error from '../../elements/Error';
import Button from '../../elements/SecondButton';

export default ({ title, errors, inputs, action, links, button, change, validation }) => {
  const { error = null, ...inputsErrors } = errors;

  const handleAction = e => {
    e.preventDefault();
    action();
  };

  return (
    <Form onSubmit={handleAction}>
      <Title>{title}</Title>
      <Error error={error && errors.error} />
      <InputsList inputs={inputs} blur={validation} action={change} errors={inputsErrors} />
      <ButtonContainer>
        <Button onClick={handleAction}>{button}</Button>
      </ButtonContainer>
      <Footer links={links} />
    </Form>
  );
};

const Form = styled.form`
  background: ${props => props.theme.primaryColor};
  border-radius: 35px;
  padding: 30px;
  width: 100%;

  @media all and (max-width: 380px) {
    padding: 15px;
    border-radius: 10px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 15px;
  display: flex;

  & button {
    width: 100%;
  }
`;
