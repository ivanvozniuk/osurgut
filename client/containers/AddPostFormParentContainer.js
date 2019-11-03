import React from 'react';

import convertToBase64 from '../services/convertToBase64';
import AddPostFormParent from '../components/AddPostFormParent';
import fetch from '../services/request';
import { Post as validatePost } from '../services/validation';

export default class AddPostFormParentContainer extends React.Component {
  state = {
    submitMessage: {},
    inputsInfo: {},
  };

  setInputState = (name, validate, type, e = { target: { value: '' } }) => {
    const { target } = e;
    this.setState(state => ({
      inputsInfo: {
        ...state.inputsInfo,
        [name]: {
          ...state.inputsInfo[name],
          value: target.type === 'file' ? target.files[target.files.length - 1] : target.value,
          error: validate ? validatePost(target.type, target.value) : undefined,
          type,
        },
      },
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { inputsInfo } = this.state;

    const errors = [];
    let counter = 0;

    for (const inputName in inputsInfo) {
      const currentInput = inputsInfo[inputName];
      this.setState(
        state => ({
          inputsInfo: {
            ...state.inputsInfo,
            [inputName]: {
              ...currentInput,
              error: validatePost(currentInput.type, currentInput.value),
            },
          },
        }),
        async () => {
          const { inputsInfo } = this.state;

          if (Object.keys(inputsInfo).length - 1 === counter) {
            const isFrontValid = errors.every(error => !error);
            this.setState({
              submitMessage: isFrontValid ? {} : { text: 'Заполните все поля', success: false },
            });
            if (isFrontValid) {
              const data = {};
              for (const inputName in inputsInfo) {
                if (inputName === 'image') {
                  data[inputName] = await convertToBase64(inputsInfo[inputName].value);
                } else {
                  data[inputName] = inputsInfo[inputName].value;
                }
              }

              const res = await fetch('/suggestion/create', {
                data,
              });

              if (res.error) {
                this.setState({
                  submitMessage: { text: res.body.errors.error, success: false },
                });
              } else {
                this.setState({
                  submitMessage: {
                    text: 'Готово! Ваш предложеный пост отправлен в обработку',
                    success: true,
                  },
                });
              }
            }
          } else {
            if (currentInput.error === null) {
              errors.push(false);
            } else {
              errors.push(true);
            }
            counter++;
          }
        },
      );
    }
  };

  render() {
    const { heading, inputs, buttons } = this.props;
    const { submitMessage, inputsInfo } = this.state;

    return (
      <AddPostFormParent
        heading={heading}
        inputs={inputs}
        buttons={buttons}
        onSubmit={this.handleSubmit}
        submitMessage={submitMessage}
        setInputState={this.setInputState}
        inputsInfo={inputsInfo}
      />
    );
  }
}
