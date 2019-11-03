import React from 'react';
import Router from 'next/router';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: '',
    };
  }

  handleAction = value => {
    this.setState({ value });
    Router.push(`/search?query=${value}`, `/search?query=${value}`, { shallow: true });
  };

  handleActiveChange = () => {
    this.setState(state => ({
      active: !state.active,
    }));
  };

  handleRoute = () => {
    const { value } = this.state;
  };

  render() {
    const { active, value } = this.state;
    const { handleAction, handleActiveChange, handleRoute } = this;
    return (
      <>
        <SearchBar
          active={active}
          value={value}
          action={handleAction}
          changeActive={handleActiveChange}
        />
      </>
    );
  }
}

export default SearchBarContainer;
