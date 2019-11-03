import React, { Component } from 'react';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

export default withRouter(
  class MenuBar extends Component {
    state = { visible: false };

    handleShowClick = () => this.setState(prevState => ({ animation: 'push', visible: true }));
    handleSidebarHide = () => this.setState(prevState => ({ animation: 'push', visible: false }));

    render() {
      const { visible } = this.state;

      const links = [
        { to: '/posts', name: 'Посты' },
        { to: '/posts/create', name: 'Создать пост' },
        { to: '/suggestion', name: 'Пост в предложениях' },
        { to: '/category', name: 'Категории' },
        { to: '/compilation', name: 'Подборки' },
        { to: '/slider', name: 'Слайдер' },
        { to: '/photoday', name: 'Фотодня' },
        { to: '/hotpost', name: 'Горячий пост' },
        { to: '/banner', name: 'Банеры' },
        { to: '/login', name: 'Логин' },
      ];

      return (
        <>
          <MenuStyled>
            <Menu.Item name="editorials" onClick={this.handleShowClick}>
              <Icon name="grid layout" />
            </Menu.Item>
          </MenuStyled>

          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="push"
              icon="labeled"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width="thin"
            >
              {links.map(({ to, name }, key) => (
                <Menu.Item key={key} onClick={() => this.props.history.push(to)}>
                  {name}
                </Menu.Item>
              ))}
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>{this.props.children}</Sidebar.Pusher>
          </Sidebar.Pushable>
        </>
      );
    }
  },
);

const MenuStyled = styled(Menu)`
  margin: 0 !important;
`;
