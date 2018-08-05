import { createAction } from 'redux-actions';
import {
  NOTE_SAVE,
  NOTE_DELETE,
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

// NOTES ACTIONS
export const saveNote = createAction(NOTE_SAVE);
export const deleteNote = createAction(NOTE_DELETE);

//TEXT FORMATTING ACTIONS
export const formatBold = createAction(FORMAT_BOLD);
export const formatItalic = createAction(FORMAT_ITALIC);
export const formatUnderline = createAction(FORMAT_UNDERLINE);
export const formatStrikethrough = createAction(FORMAT_STRIKETHROUGH);
export const formatHighlighter = createAction(FORMAT_HIGHLIGHTER);
export const formatCheckbox = createAction(FORMAT_CHECKBOX);
export const formatUnorderedList = createAction(FORMAT_UNORDERED_LIST);
export const formatOrderedList = createAction(FORMAT_ORDERED_LIST);
export const formatLink = createAction(FORMAT_LINK);
export const formatIndent = createAction(FORMAT_INDENT);
export const formatOutdent = createAction(FORMAT_OUTDENT);
export const formatSuperscript = createAction(FORMAT_SUPERSCRIPT);
export const formatSubscript = createAction(FORMAT_SUBSCRIPT);
export const formatCode = createAction(FORMAT_CODE);
export const formatTable = createAction(FORMAT_TABLE);
