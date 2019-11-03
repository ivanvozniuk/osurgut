import React from 'react';

import styled from '@emotion/styled';

import Link from '../../elements/Link';

export default ({ items, action }) => {
  const handleAction = (isAction, path) => {
    if (isAction) action(path);
  };

  return (
    <Menu>
      {items.map(({ title, path, id, isAction }) => (
        <Link key={id} href={path}>
          <Item
            onClick={() => {
              handleAction(isAction, path);
            }}
          >
            {title}
          </Item>
        </Link>
      ))}
    </Menu>
  );
};

const Item = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 18px;
  font-size: 14px;
  justify-content: center;
  position: relative;
  transition: ${({ theme }) => theme.transitionMedium} opacity;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme, active }) => !active && theme.hoverOpacity};
  }

  @media all and (max-width: 680px) {
    margin-bottom: 10px;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }

  @media all and (max-width: 420px) {
    font-size: 16px;
  }
`;

const Menu = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  color: #fff;

  @media all and (max-width: 680px) {
    flex-wrap: wrap;
  }
`;
