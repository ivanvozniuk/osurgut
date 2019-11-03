import React from 'react';
import styled from '@emotion/styled';

export default ({ type, placeholder, index, onBlur, name = index }) => (
  <Textarea
    type={type}
    placeholder={placeholder}
    name={name}
    onBlur={e => onBlur(name, true, type, e)}
  />
);

const Textarea = styled.textarea`
  background: transparent;
  width: 100%;
  padding: 0 25px;
  @media screen and (max-width: 560px) {
    padding: 0 15px;
  }
  font-family: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.darkColor};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
    opacity: 1;
  }
  padding-top: 17px !important;
  min-height: 200px;
  resize: none;
  border: 0;
`;
