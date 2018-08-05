import {
  FORMAT_BOLD,
  FORMAT_ITALIC,
  FORMAT_UNDERLINE,
  FORMAT_STRIKETHROUGH,
  FORMAT_HIGHLIGHTER,
  FORMAT_CHECKBOX,
  FORMAT_UNORDERED_LIST,
  FORMAT_ORDERED_LIST,
  FORMAT_LINK,
  FORMAT_INDENT,
  FORMAT_OUTDENT,
  FORMAT_SUPERSCRIPT,
  FORMAT_SUBSCRIPT,
  FORMAT_CODE,
  FORMAT_TABLE
} from './constants.js';

const initialState = '';

const textFormattingReducer = (state = initialState, action) => {
  const payload = action.payload || {};

  switch(action.type) {
    case FORMAT_BOLD:
      console.log('Format ${action.payload.selection} bold.');
      return state;
    case FORMAT_ITALIC:
      return state;
    case FORMAT_UNDERLINE:
      return state;
    case FORMAT_STRIKETHROUGH:
      return state;
    case FORMAT_HIGHLIGHTER:
      return state;
    case FORMAT_CHECKBOX:
      return state;
    case FORMAT_UNORDERED_LIST:
      return state;
    case FORMAT_ORDERED_LIST:
      return state;
    case FORMAT_LINK:
      return state;
    case FORMAT_INDENT:
      return state;
    case FORMAT_OUTDENT:
      return state;
    case FORMAT_SUPERSCRIPT:
      return state;
    case FORMAT_SUBSCRIPT:
      return state;
    case FORMAT_CODE:
      return state;
    case FORMAT_TABLE:
      return state;
    default:
      return state;
  }
}

export default textFormattingReducer;
