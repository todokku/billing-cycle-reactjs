import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { StoreInterface } from '../../interfaces/store';

interface RoutePropsInterface {
  component: any;
  path: string;
  exact?: boolean;
}

export const Private = ({ component: Component, ...rest }: RoutePropsInterface) => {
  const userState = useSelector((state: StoreInterface) => state.users.data);

  return (
    <Route
      {...rest}
      render={props => (userState && userState.token
        ? (<Component {...props} />)
        : (<Redirect to="/" />)
      )}
    />
  );
};

export const Public = ({ component: Component, ...rest }: RoutePropsInterface) => {
  const userState = useSelector((state: StoreInterface) => state.users.data);

  return (
    <Route
      {...rest}
      render={props => (userState && userState.token
        ? (<Redirect to="/dashboard/overview" />)
        : (<Component {...props} />)
      )}
    />
  );
};
