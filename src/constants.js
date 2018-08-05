
export const NOTE_SAVE = 'NOTE_SAVE';
export const NOTE_DELETE = 'NOTE_DELETE';
export const FORMAT_BOLD = 'BOLD';
export const FORMAT_ITALIC = 'ITALIC';
export const FORMAT_UNDERLINE = 'UNDERLINE';
export const FORMAT_STRIKETHROUGH = 'STRIKETHROUGH';
export const FORMAT_HIGHLIGHTER = 'HIGHLIGHTER';
export const FORMAT_CHECKBOX = 'CHECKBOX';
export const FORMAT_UNORDERED_LIST = 'UNORDERED_LIST';
export const FORMAT_ORDERED_LIST = 'ORDERED_LIST';
export const FORMAT_LINK = 'LINK';
export const FORMAT_INDENT = 'INDENT';
export const FORMAT_OUTDENT = 'OUTDENT';
export const FORMAT_SUPERSCRIPT = 'SUPERSCRIPT';
export const FORMAT_SUBSCRIPT = 'SUBSCRIPT';
export const FORMAT_CODE = 'CODE';
export const FORMAT_TABLE = 'TABLE';

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
