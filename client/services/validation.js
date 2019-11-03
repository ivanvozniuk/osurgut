/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export const Default = value => {
  if (value.match(/^$/) !== null) return 'Поле должно быть заполнено';
  if (value.length > 35) return 'Поле должно быть не больше 35 символов';
  else return null;
};

export const Login = (value, name) => {
  switch (name) {
    case 'login':
      if (value.length < 5 || value.length > 16) {
        return 'Логин должен быть от 5 до 16 символов';
      }
      if (value.match(/^[a-zA-Z0-9_]{5,16}$/) === null) {
        return 'Логин должен содержать цифры, латинские буквы и "_"';
      }

      break;
    case 'password':
      if (value.length < 8 || value.length > 35) {
        return 'Пароль должен быть от 8 до 35 символов';
      }
      if (
        value.match(
          /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[а-яa-z])(?=.*[А-ЯA-Z])[0-9a-zA-Zа-яА-Я!@#$%^&*]{8,35}/,
        ) === null
      ) {
        return 'Пароль должен содержать хотя бы одно число, символ, латинскую букву в большом и нижнем регистре';
      }
      break;
    default:
      return null;
  }
};

export const Register = (value, name, depended = null) => {
  switch (name) {
    case 'password_repeat':
      if (value !== depended) return 'Пароли должны совпадать';
      break;
    case 'email':
      if (
        value.match(
          /^[-A-Z-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:ru|aero|arpa|asia|biz|cat|com|ua|rus|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
        ) === null
      ) {
        return 'Введите правильный email адрес';
      }
      break;

    case 'name':
      if (value.match(/^[a-zA-ZА-Яа-я][a-zA-Zа-яА-Я]+[a-zA-ZА-Яа-я]{2,15}?$/) === null) {
        return 'Введите правильно имя';
      }

      break;

    case 'surname':
      if (value.match(/^[a-zA-ZА-Яа-я][a-zA-Zа-яА-Я]+[a-zA-ZА-Яа-я]{2,15}?$/) === null) {
        return 'Введите правильную фамилию';
      }
      break;
    default:
      return null;
  }
};

export const URL = value => {
  if (
    value.match(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    ) === null
  ) {
    return 'Введите правильную ссылку';
  }
};

export const Post = (type, value) => {
  switch (type) {
    case 'file':
      if (value.length === 0) {
        return 'Заполните это поле';
      } else return null;
    default:
      if (value.length === 0) {
        return 'Заполните это поле';
      } else if (value.length > 250) {
        return 'Превышено максимальное количество символов';
      } else return null;
  }
};
