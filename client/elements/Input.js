import React from 'react';

import styled from '@emotion/styled';

export default ({ type = 'text', placeholder = '', value, action, after, reference, ...props }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onBlur={after}
      onChange={action}
			value={value}
			ref={reference}
      {...props}
    />
  );
};

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: inherit;
  color: inherit;
  letter-spacing: 0.01rem;
`;
