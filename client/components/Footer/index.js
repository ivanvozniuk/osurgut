import React from 'react';

import styled from '@emotion/styled';

import ContainerLayout from '../../layout/Container';
import ContentLayout from '../../layout/Content';
import Fluid from '../../layout/Fluid';
import Logo from '../../elements/Logo';
import Copyright from './Copyright';

import FooterMenu from './FooterMenu';

// eslint-disable-next-line no-unused-vars
export default ({ menuItems, itemsAction }) => (
  <Fluid>
    <Footer>
      <Container>
        <Content>
          <List>
            <LogoSide>
              <Logo isBig />
            </LogoSide>

            <MenuSide>
              <FooterMenu action={itemsAction} items={menuItems} />
            </MenuSide>

            <CopyrightSide>
              <Copyright />
            </CopyrightSide>
          </List>
        </Content>
      </Container>
    </Footer>
  </Fluid>
);

const Content = styled(ContentLayout)`
  height: 100%;
`;

const Container = styled(ContainerLayout)`
  height: 100%;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primaryColor};
  height: 100px;
  display: flex;

  @media all and (max-width: 860px) {
    height: auto;
  }
`;

const List = styled.div`
  display: flex;
  height: 100%;

  @media all and (max-width: 860px) {
    flex-direction: column;
    padding: 25px 0;
  }
`;

const LogoSide = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media all and (max-width: 1024px) {
    width: auto;
    margin-right: 15px;
  }

  @media all and (max-width: 860px) {
    justify-content: center;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const CopyrightSide = styled(LogoSide)`
  justify-content: flex-end;

  @media all and (max-width: 1024px) {
    margin-left: 15px;
  }

  @media all and (max-width: 860px) {
    margin: 0;
    margin-top: 20px;
  }
`;

const MenuSide = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
