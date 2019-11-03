import React from 'react';
import styled from '@emotion/styled';

import GridRow from './GridRow';
import SingleRow from './SingleRow';

const InputsList = ({ inputs, setInputState, inputsInfo }) => {
  return (
    <Container>
      {inputs.map((input, index) => {
        const isGrid = Array.isArray(input);

        return isGrid ? (
          <GridRow
            inputsInfo={inputsInfo}
            index={index}
            input={input}
            setInputState={setInputState}
          />
        ) : (
          <SingleRow
            inputsInfo={inputsInfo}
            index={index}
            input={input}
            setInputState={setInputState}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  & > div:last-of-type {
    margin-bottom: 0;
  }
`;

export default InputsList;
