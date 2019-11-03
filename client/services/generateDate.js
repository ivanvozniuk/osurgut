/* eslint-disable operator-linebreak */
const months = [
  'января',
  'февраля',
  'иарта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export default (date, next = {}) => {
  const { minutes = null, hours = null, day = null, month = null, year = null } = date;
  const {
    day: dayNext = null,
    month: monthNext = null,
    hours: hoursNext = null,
    minutes: minutesNext = null,
  } = next;

  return {
    string: `${day && day} ${months && months[month - 1]}${
      Object.keys(next).length !== 0 ? ` - ${dayNext} ${monthNext[month - 1]}` : ''
    }${` ${year && year}`}${hours &&
      minutes &&
      ` в ${String(hours).length === 1 ? `0${hours}` : hours}:${
        String(minutes).length === 1 ? `0${minutes}` : minutes
      }`}${
      Object.keys(next).length !== 0
        ? ` до ${String(hoursNext).length === 1 ? `0${hoursNext}` : hoursNext}:${
            String(minutesNext).length === 1 ? `0${minutesNext}` : minutesNext
          }`
        : ''
    }`,
    stringShort: `${String(hours).length === 1 ? `0${hours}` : hours}:${
      String(minutes).length === 1 ? `0${minutes}` : minutes
    }`,
    schema: `${year}-${month}-${day}T${hours}:${minutes}`,
  };
};
