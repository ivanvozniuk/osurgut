import React from 'react';
import styled from '@emotion/styled';

import Link from '../../elements/Link';

export default ({ items }) => (
  <>
    {items.map(({ title, path, Icon, id }) => (
      <Link key={id} href={path} as={path}>
        <Item>
          <IconContainer>
            <Icon />
          </IconContainer>
          {title}
        </Item>
      </Link>
    ))}
  </>
);

const Item = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 18px;
  font-size: 14px;
  position: relative;
  transition: ${({ theme }) => theme.transitionMedium} opacity;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 6px 6px 0px 0;
    background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  }

  &:hover {
    opacity: ${({ theme, active }) => !active && theme.hoverOpacity};
  }

  @media all and (max-width: 680px) {
    height: 55px;
    font-size: 20px;
    width: 100%;
    justify-content: center;
    background-color: ${({ active }) => (active ? '#fafafa' : 'transparent')};

    &:after {
      background-color: transparent;
    }
  }
`;

const IconContainer = styled.div`
  margin-right: 10px;
  height: 18px;
  width: 18px;

  @media all and (max-width: 780px) {
    display: none;
  }
`;
