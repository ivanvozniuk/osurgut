import React from 'react';
import styled from '@emotion/styled';

import InputsList from './InputsList';
import ButtonsList from './ButtonsList';

export default ({
  heading,
  inputs,
  buttons,
  onSubmit,
  submitMessage,
  setInputState,
  inputsInfo,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Heading>{heading}</Heading>
      <InputsList inputs={inputs} setInputState={setInputState} inputsInfo={inputsInfo} />
      <SubmitMessage success={submitMessage.success}>{submitMessage.text}</SubmitMessage>
      <Container>
        <ButtonsList buttons={buttons} />
        <ContactLink href="#">Есть вопросы? Свяжитесь с нами!</ContactLink>
      </Container>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.additionalBorderRadius};
  max-width: 920px;
  margin: 35px auto;

  @media screen and (max-width: 560px) {
    padding: 20px;
  }
`;
const Heading = styled.h2`
  color: ${({ theme }) => theme.darkestColor};
  font-family: ${({ theme }) => theme.bold};
  font-size: 24px;
  margin-bottom: 35px;
`;
const ContactLink = styled.a`
  color: ${({ theme }) => theme.grayDarkColor};
  margin-top: 20px;
  transition: ${({ theme }) => theme.transitionMedium};

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
const SubmitMessage = styled.span`
  color: ${({ theme: { red, blue }, success }) => (success ? blue : red)};
  opacity: ${({ success }) => (success == undefined ? 0 : 1)};
  font-size: 18px;
  min-height: 24px;
  text-align: left;
  transition: ${({ theme }) => theme.transitionMedium};
  margin: 20px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
