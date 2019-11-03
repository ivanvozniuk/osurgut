import React, { Children } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export default withRouter(({ router, children, as, href, ...props }) => (
  <Link {...props} href={href} as={as}>
    {React.cloneElement(Children.only(children), {
      active: router.asPath === href || router.asPath === as,
    })}
  </Link>
));
