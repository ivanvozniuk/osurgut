import React from 'react';
import styled from '@emotion/styled';

import ElementButton from '../../elements/Button';
import Icon from '../../elements/Icon';
import Dropwdown from '../../elements/Dropdown';
import CitiesList from './CitiesList';

export default ({ cities, activeCity }) => {
  return (
    <Container>
      <Dropwdown
        header={props => (
          <Button {...props}>
            <Icon size="25" name="marker" />
            <City>{activeCity}</City>
          </Button>
        )}
      >
        <Cities>
          <CitiesList cities={cities} />
        </Cities>
      </Dropwdown>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Cities = styled.div`
  width: 100%;
  min-width: 280px;
`;

const Button = styled(ElementButton)`
  display: flex;
  padding: 14px 26px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  ${({ theme, isActive }) => `
		box-shadow: ${theme.mainShadow};
		&:hover {
			opacity: 1;
			box-shadow: ${theme.mainShadowHover};
    }
    border: 2px solid ${isActive ? theme.red : 'transparent'};
		border-radius: ${theme.buttonBorderRadius}; 
		transition: ${theme.transitionMedium} box-shadow, ${theme.transitionMedium} border; 
	`}
`;

const City = styled.span`
  ${({ theme }) => `
    color: ${theme.darkestColor};
    font-family: ${theme.medium};
  `}
  margin-left: 5px;
`;
