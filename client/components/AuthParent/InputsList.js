import React from 'react';

import styled from '@emotion/styled';
import Input from '../../elements/Input';
import Error from '../../elements/Error';

export default ({ inputs, action, errors, blur }) => {
  return (
    <Container>
      {inputs.map(({ id, name, ...props }, index) => (
        <Block key={id && index}>
          <Error error={errors[name]} />
          <InputContainer>
            <Input after={() => blur(name)} action={e => action(name, e.target.value)} {...props} />
          </InputContainer>
        </Block>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 12px 0 30px 0;
`;

const Block = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const InputContainer = styled.div`
  height: 35px;
  margin-top: 5px;
  background: #350088;
  border-radius: 100px;
  font-size: 15px;
  color: #fff;
  overflow: hidden;
  padding: 0 15px;
`;
