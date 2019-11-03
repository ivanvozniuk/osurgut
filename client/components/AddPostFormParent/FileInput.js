import React, { useState } from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import IconElement from '../../elements/Icon';

export default ({ index, type, placeholder, iconName, iconSize, onBlur, name = index }) => {
  const [labelValue, setLabelValue] = useState(placeholder);
  const handleInput = e => {
    setLabelValue(e.currentTarget.files[0].name);
  };
  return (
    <>
      <Label htmlFor={name} type={type}>
        {labelValue && (
          <LabelText isSelected={!(labelValue === placeholder)}>{labelValue}</LabelText>
        )}
        {iconName && <Icon size={iconSize} name={iconName} />}
      </Label>
      <Input
        onChange={handleInput}
        index={index}
        type={type}
        placeholder={placeholder}
        name={name}
        after={e => onBlur(name, true, type, e)}
      />
    </>
  );
};

const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;
const LabelText = styled.span`
  color: ${({ theme, isSelected }) => (isSelected ? theme.darkColor : theme.inputPlaceholder)};
  cursor: pointer;
  width: 100%;
`;
const Icon = styled(IconElement)`
  cursor: pointer;
  margin-left: auto;
`;
