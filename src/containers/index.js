import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import theme from '../theme.js';
import NoteList from './note-list.js';
import NoteDetails from './note-details.js';

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
  }

  _onUtilBtnPress = () => {
    alert("Utility button pressed");
  }

  render() {
    const NavigationContainer = createStackNavigator({
        ListScreen: { screen: NoteList },
        DetailScreen: { screen: NoteDetails }
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
