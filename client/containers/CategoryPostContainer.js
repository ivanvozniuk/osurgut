import React, { createContext } from 'react';
import Router from 'next/router';

import fetch from '../services/request';
import { URL } from '../services/validation';

import CategoryPost from '../components/CategoryPost';

export const ActiveLinkContext = createContext({});

export default class CategoryPostContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: Router.router === null ? '' : Router.router.query.id || '',
    };
  }

  componentDidMount() {
    Router.events.on('routeChangeComplete', () => {
      this.setState({
        activeLink: Router.router === null ? '' : Router.router.query.id || '',
      });
    });
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', () => {
      this.setState({
        activeLink: Router.router === null ? '' : Router.router.query.id || '',
      });
    });
  }

  handleAction = (value, type) => {
    if (URL(value) && type) {
      const routePath = {
        pathname: `/${type}/category`,
        query: value === '' ? null : { id: value },
      };
      Router.push(routePath, routePath, {
        shallow: true,
      });
    } else {
      window.location.href = value;
    }
  };

  render() {
    const { children, model } = this.props;
    const { state, handleAction, props } = this;
    return (
      <>
        <ActiveLinkContext.Provider value={state.activeLink}>
          <CategoryPost
            links={[
              {
                id: 0,
                name: 'Все',
                value: '',
                type: model,
              },
              ...props.data,
            ]}
            activeLink={state.activeLink}
            action={handleAction}
          />
          {children}
        </ActiveLinkContext.Provider>
      </>
    );
  }
}

export const getInitialProps = async (query, type) => {
  const req = await fetch('/category/get', {
    data: { type, model: 'category' },
  });

  return {
    data: req.body.category,
    isError: req.error,
  };
};
