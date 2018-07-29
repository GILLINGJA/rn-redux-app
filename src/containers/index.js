import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import theme from '../theme.js';
import NoteListScreen from './note-list.js';
import NoteDetailScreen from './note-details.js';

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavigationContainer = createStackNavigator({
        ListScreen: { screen: NoteListScreen },
        DetailScreen: { screen: NoteDetailScreen }
      }, {
        initalRouteName: 'ListScreen',
        navigationOptions: {
          headerMode: 'screen',
          headerStyle: theme.styles.utilityBar
        }
      }
    );

    return (
      <NavigationContainer />
    );
  }
}
