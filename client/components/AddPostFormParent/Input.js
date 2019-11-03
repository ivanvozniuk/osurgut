import React from 'react';
import styled from '@emotion/styled';

import InputElement from '../../elements/Input';

export default ({ index, type, placeholder, name = index, reference, ...props }) => {
  return <Input id={name} type={type} placeholder={placeholder} {...props} />;
};

const Input = styled(InputElement)`
  background: transparent;
  width: 100%;
  padding: 0 25px;
  font-family: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.darkColor};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
    opacity: 1;
  }

  ${({ type }) => {
    switch (type) {
      case 'text':
        return `
					min-height: 45px;
				`;
      case 'file':
        return `
					position: absolute;
					width: 1px;
					height: 1px;
					margin: -1px;
					opacity: 0;
				`;
      case 'date':
        return `
					width: min-content;
					height: auto;
					padding: 0 !important;
				`;
      case 'time':
        return `
					padding: 0 !important;
				`;
      case 'select':
        return `
					min-height: 45px;
				`;
    }
  }}
`;

export { Input };
