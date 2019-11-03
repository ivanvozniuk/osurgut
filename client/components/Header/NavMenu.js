import React, { useState } from 'react';

import styled from '@emotion/styled';

import LinkList from './LinkList';
import Icon from '../../elements/Icon';
import Logo from '../../elements/Logo';

export default ({ items }) => {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive(!active);
  };

  return (
    <>
      <OpenMenu onClick={handleChangeActive}>
        <Icon name="menu" />
      </OpenMenu>
      <Menu active={active}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <CloseMenu onClick={handleChangeActive}>
          <Icon name="menu_close" />
        </CloseMenu>
        <LinkList items={items} />
      </Menu>
    </>
  );
};

const LogoContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: calc(50% - (64px / 2));
  padding: 12px;
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;

  @media all and (min-width: 681px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionFast} left;
  color: #fff;

  @media all and (max-width: 680px) {
    position: fixed;
    top: 0;
    left: ${({ active }) => (active ? 0 : '-100vw')};
    background: #fff;
    flex-direction: column;
    color: #101010;
    align-items: center;
    z-index: 999;
  }
`;

const OpenMenu = styled.button`
  height: 18px;
  width: 24px;
  margin-right: auto;
  transition: ${({ theme }) => theme.transitionMedium};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme, active }) => !active && theme.hoverOpacity};
  }

  @media all and (min-width: 681px) {
    display: none;
  }
`;

const CloseMenu = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  height: 25px;
  width: 25px;

  transition: ${({ theme }) => theme.transitionMedium};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme, active }) => !active && theme.hoverOpacity};
  }

  @media all and (min-width: 681px) {
    display: none;
  }
`;
