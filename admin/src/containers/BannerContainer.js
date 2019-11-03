import React from 'react';
import axios from 'axios';

import BannerForm from '../components/BannerForm';
import { Context } from '../App';

import { API } from '../settings';

class SliderContainer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: null,
      isRendering: true,
      isError: null,
      message: null,
    };
  }

  handleAction = (valueData, type) => {
    axios
      .post(
        `${API}/banner/${type}`,
        { ...valueData },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        switch (status) {
          case 200:
            this.setState(state => ({
              isLoading: false,
              isError: false,
              message: `Банер успешно ${type === 'create' ? 'создан' : 'удален'}`,
            }));
            return this.fetchData();

          default:
            this.setState(state => ({
              isLoading: false,
              isError: true,
              message: body.errors.error,
            }));
            break;
        }
      });
  };

  fetchData = () => {
    this.setState({ isLoading: true });
    return axios
      .post(
        `${API}/banner/get`,
        { type: null },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        console.log(body);

        switch (status) {
          case 200:
            return this.setState(state => ({ isLoading: false, data: body.banner }));

          default:
            this.setState(state => ({
              isLoading: false,
              isError: true,
              data: body.photoday,
              message: 'Ошибка при загрузке баннеров',
            }));
            break;
        }
      });
  };

  componentDidMount() {
    return this.fetchData().then(() => this.setState({ isRendering: false }));
  }

  render() {
    return (
      <BannerForm
        isLoading={this.state.isLoading}
        action={this.handleAction}
        data={this.state.data}
        isRendering={this.state.isRendering}
        isError={this.state.isError}
        message={this.state.message}
      />
    );
  }
}

export default SliderContainer;
