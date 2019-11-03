import React from 'react';
import axios from 'axios';

import SliderForm from '../components/SuggestionForm';
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

  handleDelete = id => {
    this.setState({ isLoading: true });
    axios
      .post(
        `${API}/suggestion/delete`,
        { id },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body, message } = response.data;

        if (status === 200) {
          this.setState(state => ({
            isError: false,
            message: 'Пост на предложение успешно удален',
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
          message: 'Ошибка при удалении поста на предложение',
        })),
      );
  };

  fetchData = () => {
    this.setState({ isLoading: true });
    return axios
      .post(
        `${API}/suggestion/get`,
        { type: null },
        { headers: { Authorization: `Token ${this.context.token}` } },
      )
      .then(response => {
        const { status, body } = response.data;

        if (status === 200) {
          return this.setState(state => ({ isLoading: false, data: body.suggestion }));
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
        data={this.state.data}
        actionDelete={this.handleDelete}
      />
    );
  }
}

export default SliderContainer;
