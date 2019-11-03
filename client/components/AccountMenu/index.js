import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../elements/Icon';

const AccountMenu = ({ isLogged, accountImage }) => {
  return (
    <AccountImage>
      {isLogged ? <UserImage img={accountImage} /> : <Icon name="account_placeholder" />}
    </AccountImage>
  );
};

export default AccountMenu;

const AccountImage = styled.button`
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-left: 15px;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitionMedium} opacity;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

const UserImage = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: 50% 50%;
  height: 100%;
  width: 100%;
  border-radius: 100px;
`;
