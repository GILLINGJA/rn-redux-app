import React, { Component } from 'react';
import { View } from 'react-native';

import NoteList from './note-list.js';
import NoteDetails from './note-details.js';

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View></View>
    );
  }
}
