import { createAction } from 'redux-actions';
import { NOTE_SAVE, NOTE_DELETE } from './constants.js';

export const saveNote = createAction(NOTE_SAVE);
export const deleteNote = createAction(NOTE_DELETE);
