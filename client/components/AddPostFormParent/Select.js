import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Input } from './Input';
import IconElement from '../../elements/Icon';

export default ({ placeholder, type, options, index, iconName, iconSize, name = index }) => {
	const [selectValue, setSelectValue] = useState(placeholder);

	const handleSelect = e => {
		setSelectValue(e.currentTarget.value);
	}
  return <>
    <Label htmlFor={name} type={type}>
      {<LabelText isSelected={!(selectValue === placeholder)}>{selectValue}</LabelText>}
      {iconName && <Icon backgroundSize="100% 100%" size={iconSize} name={iconName} />}
    </Label>
    <Select type={type} id={index} onChange={handleSelect}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </Select>
  </>
};
const StyledSelect = Input.withComponent('select');
const Select = styled(StyledSelect)`
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	max-height: 45px;
`;
const Label = styled.label`
  ${({ type }) => type !== 'date'
    && type !== 'time'
    && `
		width: 100%;
	`}
	height: 45px;
	padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LabelText = styled.span`
  color: ${({ theme, isSelected }) => isSelected ? theme.darkColor : theme.inputPlaceholder};
  cursor: pointer;
  width: 100%;
`;
const Icon = styled(IconElement)`
  cursor: pointer;
  margin-left: auto;
`;
