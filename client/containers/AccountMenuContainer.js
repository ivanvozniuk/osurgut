import React from 'react';

import AccountMenu from '../components/AccountMenu';

export default () => {
  const accountImage = 'https://thispersondoesnotexist.com/image';
  const isLogged = false;
  return (
    <>
      <AccountMenu accountImage={accountImage} isLogged={isLogged} />
    </>
  );
};
