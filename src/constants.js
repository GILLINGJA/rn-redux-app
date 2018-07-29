
export const NOTE_SAVE = 'NOTE_SAVE';
export const NOTE_DELETE = 'NOTE_DELETE';

export const getCustomDateFormat = () => {
  let date = new Date();
  return (date.getFullYear() + '-' +
               date.getMonth() + '-' +
               date.getDate() + ' ' +
               date.getHours() + ':' +
               date.getMinutes() + ':' +
               date.getSeconds());
};
