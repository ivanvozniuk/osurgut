import React from 'react';
import axios from 'axios';

import SliderForm from '../components/SliderForm';
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

  handleAction = (value, type) => {
    this.setState({ isLoading: true });
    axios
      .post(
        `${API}/slide/${type}`,
        { ...value },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body, message } = response.data;

        if (status === 200) {
          this.setState(state => ({
            isError: false,
            message: 'Слайд успешно сохранен',
          }));
          return this.fetchData();
        } else {
          this.setState(state => ({
            isError: true,
            message: message || body.errors.error,
          }));
        }
      })
      .then(() => this.setState({ isLoading: false }))
      .catch(() =>
        this.setState(state => ({
          isError: true,
          message: 'Ошибка при создании слайда',
        })),
      );
  };

  fetchData = () => {
    this.setState({ isLoading: true });
    return axios
      .post(
        `${API}/slide/get`,
        { type: null },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        if (status === 200) {
          return this.setState(state => ({ isLoading: false, data: body.slider }));
        }
      });
  };

  componentWillMount() {
    return this.fetchData().then(() => this.setState({ isRendering: false }));
  }

  render() {
    return (
      <SliderForm
        isLoading={this.state.isLoading}
        isRendering={this.state.isRendering}
        isError={this.state.isError}
        message={this.state.message}
        action={this.handleAction}
        data={this.state.data}
      />
    );
  }
}

export default SliderContainer;
