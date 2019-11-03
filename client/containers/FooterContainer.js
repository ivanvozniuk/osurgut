import React from 'react';

import Footer from '../components/Footer';

class FooterContainer extends React.PureComponent {
  items = [
    {
      title: '+7 (3462) 76-24-66',
      path: 'tel:+73462762466',
      id: 0,
      isAction: true,
    },
    {
      title: 'Info@osurgut.com',
      path: 'mailto:info@osurgut.com',
      id: 1,
      isAction: true,
    },
    {
      title: 'vk.com/osurgut',
      path: 'https://vk.com/osurgut',
      id: 2,
      isAction: true,
    },
    {
      title: 'Рекламодателям',
      path: '/customers',
      id: 3,
    },
  ];

  handleChangeHref = path => {
    window.location.href = path;
  };

  render() {
    const { handleChangeHref, items } = this;
    return (
      <>
        <Footer itemsAction={handleChangeHref} menuItems={items} />
      </>
    );
  }
}

export default FooterContainer;
