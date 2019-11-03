import React from 'react';

import styled from '@emotion/styled';

import Icon from './Icon';
import ButtonParent from './Button';

export default ({ iconName, text, action, isPrimary, isActive = false, className }) => (
  <Button onClick={action} isPrimary={isPrimary} isActive={isActive} className={className}>
    {iconName && (
      <IconContainer>
        <Icon size={14} name={iconName} />
      </IconContainer>
    )}
    <Text isPrimary={isPrimary}>{text}</Text>
  </Button>
);
const IconContainer = styled.div`
  margin-right: 8px;
`;

const Button = styled(ButtonParent)`
  background-color: ${({ isPrimary, isActive, theme }) => {
    if (isActive) return isPrimary ? theme.lightColor : theme.grayColor;
    else return 'transparent';
  }};
  border: ${({ isPrimary, isActive, theme }) => {
    if (!isActive) {
      return isPrimary ? `2px solid ${theme.lightColor}` : `2px solid ${theme.grayColor}`;
    } else return '2px solid transparent';
  }};
  border-radius: 100px;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: ${({ isPrimary, theme }) => (isPrimary ? theme.secondaryColor : theme.darkColor)};
  font-size: 14px;
`;
