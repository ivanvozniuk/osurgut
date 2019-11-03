import React from 'react';

import styled from '@emotion/styled';

import ContainerLayout from '../../layout/Container';
import ContentLayout from '../../layout/Content';
import Fluid from '../../layout/Fluid';
import AccountMenuContainer from '../../containers/AccountMenuContainer';
import SearchBarContainer from '../../containers/SearchBarContainer';
import Logo from '../../elements/Logo';
import NavMenu from './NavMenu';

// eslint-disable-next-line no-unused-vars
export default ({ menuItems }) => (
  <Fluid>
    <Header>
      <Container>
        <Content>
          <Nav>
            <LogoSide>
              <Logo />
            </LogoSide>

            <MenuSide>
              <NavMenu items={menuItems} />
            </MenuSide>

            <ActionSide>
              <SearchBarContainer />
              <AccountMenuContainer />
            </ActionSide>
          </Nav>
        </Content>
      </Container>
    </Header>
  </Fluid>
);

const Content = styled(ContentLayout)`
  height: 100%;
`;

const Container = styled(ContainerLayout)`
  height: 100%;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  height: 70px;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
`;

const LogoSide = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media all and (max-width: 680px) {
    display: none;
  }
`;

const ActionSide = styled(LogoSide)`
  justify-content: flex-end;

  @media all and (max-width: 680px) {
    width: auto;
    display: flex;
    margin-left: 15px;
  }
`;

const MenuSide = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
