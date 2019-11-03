import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router';

import { Context } from '../App';

const PrivateRoute = ({ component: Component, history, ...also }) => {
  const store = useContext(Context);

  return (
    <Route
      {...also}
      render={props =>
        store.checkToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
