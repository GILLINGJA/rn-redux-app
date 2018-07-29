
export const NOTE_SAVE = 'NOTE_SAVE';
export const NOTE_DELETE = 'NOTE_DELETE';

export const getCustomDateFormat = (today = false) => {
  let date = new Date();

  if(today) {
    return (date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds());
  }

  return (date.getFullYear() + '-' +
          date.getMonth() + '-' +
          date.getDate());
};
