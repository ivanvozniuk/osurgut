import React from 'react';
import styled from '@emotion/styled';
import Button from '../../elements/SecondButton';
import Link from '../../elements/Link';

export default ({ cities }) => {
  return (
    <Container>
      <Items>
        {cities.map(({ name, link, id }) => (
          <Item href={link} key={id}>
            {name}
          </Item>
        ))}
      </Items>
      <Footer>
        <Link href="/partners" as="/partners">
          <Button>Стать партнером</Button>
        </Link>
      </Footer>
    </Container>
  );
};

const Footer = styled.div`
  padding: 25px 15px;
  display: flex;
  justify-content: center;

  ${({ theme }) => `
    border-top: 1px solid ${theme.borderUnderline}
	`}
`;

const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 15px;

  ${({ theme }) => `
    font-family: ${theme.medium};
    color: ${theme.darkestColor};
    background-color: #fff;
		&:hover {
			background-color: #fafafa;
		}
		transition: ${theme.transitionMedium} color, ${theme.transitionMedium} background-color;
	`}
`;

const Items = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;

  margin-top: 14px;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;

  ${({ theme }) => `
		box-shadow: ${theme.mainShadow};
		&:hover {
			opacity: 1;
			box-shadow: ${theme.mainShadowHover};
		}
		border-radius: ${theme.imageBorderRadius}; 
		transition: ${theme.transitionMedium} box-shadow; 
	`}
`;
