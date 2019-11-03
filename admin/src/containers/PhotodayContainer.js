import React from 'react';
import axios from 'axios';

import PhotodayForm from '../components/PhotodayForm';
import { Context } from '../App';

import { API } from '../settings';

class SliderContainer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: null,
      isError: null,
      message: null,
      isRendering: true,
    };
  }

  handleAction = (value, type) => {
    this.setState({ isLoading: true });
    axios
      .post(
        `${API}/photoday/change`,
        { ...value },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        switch (status) {
          case 200:
            this.setState(state => ({
              isLoading: false,
              isError: false,
              message: 'Слайд успешно создан',
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
        `${API}/photoday/get`,
        { id: null },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        switch (status) {
          case 200:
            this.setState(state => ({
              isLoading: false,
              data: body.photoday,
            }));
            break;

          default:
            this.setState(state => ({
              isLoading: false,
              isError: true,
              data: body.photoday,
              message: 'Ошибка при загрузке фотодня',
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
      <PhotodayForm
        isLoading={this.state.isLoading}
        action={this.handleAction}
        data={this.state.data}
        isError={this.state.isError}
        message={this.state.message}
        isRendering={this.state.isRendering}
      />
    );
  }
}

export default SliderContainer;
