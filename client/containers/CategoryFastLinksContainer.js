import React from 'react';
import Router from 'next/router';

import { URL } from '../services/validation';
import fetch from '../services/request';

import CategoryHeader from '../components/CategoryHeader';
import CategoryFastLinks from '../components/CategoryFastLinks';

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

  componentDidUnmount() {
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
    const { props, state, handleAction } = this;

    return (
      <>
        <CategoryHeader isSmall heading="Полезные ссылки" />
        <CategoryFastLinks
          links={[
            {
              id: 0,
              name: 'Популярное',
              value: '',
              type: '',
            },
            ...props.data,
          ]}
          activeLink={state.activeLink}
          action={handleAction}
        />
      </>
    );
  }
}

export const getInitialProps = async (query, type) => {
  const req = await fetch('/category/get', {
    data: { type, model: 'fastlink' },
  });

  return {
    data: req.body.category,
    isError: req.error,
  };
};
