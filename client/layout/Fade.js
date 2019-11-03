import React from 'react';
import styled from '@emotion/styled';
import { Watch } from 'scrollmonitor-react';

class Fade extends React.Component {
  state = {
    loaded: null,
  };

  render() {
    const { isInViewport, children, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <Layout loaded={loaded} isInViewport={isInViewport} {...props}>
        {children}
      </Layout>
    );
  }
}

export default Watch(Fade);

const Layout = styled.div`
  animation: ${({ theme }) => theme.fadeDefault} ${({ theme }) => theme.fadeLong};

  ${({ isInViewport, theme, loaded }) => `
    transition: ${theme.fadeLong};
    opacity: ${isInViewport ? 1 : loaded === true ? 1 : 0};
  `}
`;
