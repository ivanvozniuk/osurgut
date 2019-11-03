import React from 'react';
import styled from '@emotion/styled';

import IconElement from '../../elements/Icon';
import InputElem from './Input';

export default ({ index, type, iconName, iconSize, placeholder, onBlur, name = index }) => {
  return (
    <>
      <Label htmlFor={name} type={type}>
        <Input
          index={index}
          type={type}
          placeholder={placeholder}
          after={e => onBlur(name, true, type, e)}
          name={name}
        />
        {iconName && <Icon size={iconSize} name={iconName} />}
      </Label>
    </>
  );
};
const Label = styled.label`
  ${({ type }) =>
    type !== 'time' &&
    `
		width: 100%;
	`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;
const Input = styled(InputElem)`
  ${({ theme, type }) =>
    type === 'time' &&
    `
		color: ${theme.inputPlaceholder};
	`};
  padding: 0;
`;
const Icon = styled(IconElement)`
  cursor: pointer;
  margin-left: auto;
`;
