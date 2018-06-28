import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';
import utilityStyles from '../constants.js';
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
          headerStyle: utilityStyles.utilityBar,
          headerLeft: (
            <TouchableHighlight
              onPress={this._onUtilBtnPress}
              underlayColor='#fff'>
              <View style={utilityStyles.utilButton}>
                <FontAwesome style={utilityStyles.utilIcon}>{Icons.bars}</FontAwesome>
              </View>
            </TouchableHighlight>
          ),
          headerRight: (
            <View style={utilityStyles.utilButtonGroup}>
              <TouchableHighlight
                onPress={this._onUtilBtnPress}
                underlayColor='#fff'>
                <View style={utilityStyles.utilButton}>
                  <FontAwesome style={utilityStyles.utilIcon}>{Icons.shareAlt}</FontAwesome>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this._onUtilBtnPress}
                underlayColor='#fff'>
                <View style={utilityStyles.utilButton}>
                  <FontAwesome style={utilityStyles.utilIcon}>{Icons.ellipsisV}</FontAwesome>
                </View>
              </TouchableHighlight>
            </View>
          )
        }
      }
    );

    return (
      <NavigationContainer />
    );
  }
}
