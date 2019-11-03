import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import InputParent from './InputParent';
import ErrorElem from '../../elements/Error';

const GridRow = ({ inputsInfo, input, index, setInputState }) => {
  useEffect(() => {
    input.map(({ name, type }) => setInputState(name, false, type));
  }, [input]);

  return (
    <GridContainer gridCols={input.length}>
      {input.map(({ placeholder, type, iconName, iconSize, options, title, name }) => {
        const inputInfo = inputsInfo[name] || {};

        return (
          <div>
            {inputInfo && inputInfo.error ? (
              <Error error={inputInfo.error} />
            ) : (
              title && <Title>{title}</Title>
            )}
            <Block
              type={type}
              tabIndex={index}
              key={index}
              state={inputInfo.error === undefined ? inputInfo.error : !!inputInfo.error}
              title={title}
            >
              <InputParent
                onBlur={setInputState}
                type={type}
                placeholder={placeholder}
                index={index}
                iconName={iconName}
                iconSize={iconSize}
                options={options}
                name={name}
              />
            </Block>
          </div>
        );
      })}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ gridCols }) => gridCols}, 1fr);
  grid-column-gap: 25px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const Block = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	background: #fff;
	transition: ${({ theme }) => theme.transitionMedium};
	margin: ${({ title }) => (title ? '10px' : '0')} 0 25px;

	border-radius: ${({ theme }) => theme.additionalBorderRadius};
  border: 2px solid;
	border-color: ${({ theme, state }) => {
    switch (state) {
      case true:
        return theme.red;
      case false:
        return theme.blue;
      case undefined:
        return theme.grayLightColor;
    }
  }};
	${({ type }) =>
    (type === 'file' || type === 'date' || type === 'time') &&
    `
		min-height: 45px;
	`}
	${({ type }) =>
    (type === 'date' || type === 'file' || type === 'time') &&
    `
		padding: 0 25px;

		@media screen and (max-width: 560px) {
			padding: 0 15px;
		}
	`}
	transition: box-shadow border-color ${({ theme }) => theme.transitionFast};

	&:focus-within {
		box-shadow: 0 0 10px ${({ theme }) => theme.grayColor};
	}
`;
const Title = styled.span`
  color: ${({ theme }) => theme.inputTitle};
`;
const Error = styled(ErrorElem)`
  line-height: 1;
  min-height: initial;
`;

export default GridRow;
