
export const NOTE_SAVE = 'NOTE_SAVE';
export const NOTE_DELETE = 'NOTE_DELETE';

const doubleDigit = (n) => {
  return n > 9 ? '' + n : '0' + n;
}

export const getCustomDateFormat = (today = false, dateUpdated) => {
  let date = new Date(dateUpdated);

  if(today) {
    return (doubleDigit(date.getHours()) + ':' +
            doubleDigit(date.getMinutes()));
  }

  return (doubleDigit(date.getDate()) + '/' +
          doubleDigit(date.getMonth()) + '/' +
          date.getFullYear());
};
