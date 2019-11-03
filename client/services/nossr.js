import React from 'react';
import Skeleton from '../elements/Skeleton';

class noSSR extends React.Component {
  state = {
    isLoading: null,
    initialProps: null,
  };

  componentDidMount() {
    const { getInitialProps } = this.props;
    return new Promise(resolve => {
      resolve(getInitialProps());
    }).then(data => {
      this.setState(() => ({ initialProps: data, isLoading: false }));
    });
  }

  render() {
    const { component: Component, getInitialProps, children, ...props } = this.props;
    const { isLoading, initialProps } = this.state;

    return (
      <Skeleton isLoading={isLoading} {...props}>
        {isLoading === false && <Component {...initialProps}>{children}</Component>}
      </Skeleton>
    );
  }
}

export default noSSR;
