import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import NoteList from './note-list.js';
import NoteDetails from './note-details.js';

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavigationContainer = createStackNavigator(
      {
        ListScreen: { screen: NoteList },
        DetailScreen: { screen: NoteDetails }
      },
      {
        initalRouteName: 'ListScreen'
      }
    );

    return (
      <NavigationContainer />
    );
  }
}
