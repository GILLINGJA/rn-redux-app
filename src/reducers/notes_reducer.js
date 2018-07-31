import uuidv4 from 'uuid/v4';
import { NOTE_SAVE, NOTE_DELETE } from '../constants.js';
import { ToastAndroid } from 'react-native';

const initialState = [];

const notesReducer = (state = initialState, action) => {
  const payload = action.payload || {};

  switch(action.type) {
    case NOTE_SAVE:
      ToastAndroid.show('Saving note...', ToastAndroid.SHORT);
      if('id' in payload && state.findIndex(n => n.id === payload.id) >= 0) {
        return state.map(n => n.id === payload.id ? payload : n);
      } else {
        return [ payload, ...state ];
      }
    case NOTE_DELETE:
      if('id' in payload) {
        ToastAndroid.show('Note deleted', ToastAndroid.SHORT);
        return state.filter(n => n.id !== payload.id);
      }
      return state;
    default:
      return state;
  }
}

export default notesReducer;
