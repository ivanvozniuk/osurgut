import React from 'react';
import axios from 'axios';

import PostForm from '../components/PostForm';
import { Context } from '../App';

import { API } from '../settings';

class PostCreateContainer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      content: {
        id: null,
        title: '',
        image: '',
        category: '',
        author: {
          name: '',
          link: '',
        },
        address: {
          name: '',
          link: '',
        },
        date: {
          day: 0,
          month: 0,
          hours: 0,
          minutes: 0,
          year: 0,
        },
        nextDate: {
          day: 0,
          month: 0,
          hours: 0,
          minutes: 0,
          year: 0,
        },
        price: '',
        likes: 0,
        views: 0,
        body: `# This is a header\n\nAnd this is a paragraph`,
        hidden: false,
        hot: false,
      },
      status: {
        dateOnSave: false,
        model: 'news',
      },
      meta: {
        isLoading: null,
        isRendering: true,
        isError: null,
        message: null,
      },
    };
  }

  handleChange = (value, name, sub = null) => {
    name = name === '' ? null : name;
    sub = sub === '' ? null : sub;

    this.setState(state => {
      if (sub === null) {
        return { content: { ...state.content, [name]: value } };
      } else {
        return { content: { ...state.content, [name]: { ...state.content[name], [sub]: value } } };
      }
    });
  };

  handleChangeStatus = (value, name) => {
    const { status } = this.state;
    console.log(value, name);
    this.setState({ status: { ...status, [name]: value } });
    console.log(this.state);
  };

  handleSend = () => {
    this.setState(state => ({
      meta: { ...state.meta, isLoading: true },
    }));

    let { id, ...data } = this.state.content;
    const { dateOnSave, model } = this.state.status;
    if (dateOnSave === true) {
      const current = new Date();
      data.date.day = current.getDate();
      data.date.month = current.getMonth();
      data.date.hours = current.getHours();
      data.date.minutes = current.getMinutes();
      data.date.year = current.getFullYear();
    }

    data.likes = Number(data.likes);
    data.views = Number(data.views);

    console.log(data);

    if (id === null) {
      axios
        .post(
          `${API}/post/create`,
          { ...data, model },
          { headers: { Authorization: `Token ${this.context.token}` } },
        )
        .then(response => {
          const { status, body } = response.data;

          switch (status) {
            case 200:
              this.setState(state => ({
                meta: { ...state.meta, message: 'Пост успешно сохранен', isError: false },
              }));
              break;

            default:
              this.setState(state => ({
                meta: { ...state.meta, message: body.errors.error, isError: true },
              }));
              break;
          }
        })
        .then(() => {
          this.setState(state => ({
            meta: { ...state.meta, isLoading: false },
          }));
        });
    }
  };

  componentDidMount() {
    this.setState(state => ({
      meta: { ...state.meta, isRendering: false },
    }));
  }

  render() {
    return (
      <PostForm
        action={{
          create: this.handleSend,
          change: this.handleChange,
          changeStatus: this.handleChangeStatus,
          delete: () => {},
        }}
        status={this.state.status}
        state={this.state.content}
        meta={this.state.meta}
      />
    );
  }
}

export default PostCreateContainer;
