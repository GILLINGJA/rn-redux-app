import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';
import utilityStyles from '../constants.js';

import UtilityButton from '../components/utility-button.js';
import NoteListItem from '../components/note-list-item.js';

export default class NoteList extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      pressMenu: () => {  },
      onUtilBtnPress: () => { alert("Utility button pressed") }
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <UtilityButton onPress={navigation.getParam('pressMenu')}>{Icons.bars}</UtilityButton>
      ),
      headerRight: (
        <View style={theme.styles.utilButtonGroup}>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.shareAlt}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.ellipsisV}</UtilityButton>
        </View>
      )};
  }

  render() {
    const params = {
      actionButton: {
        buttonColor: theme.primaryColour,
        onPress: () => this.props.navigation.navigate('DetailScreen')
      }
    };

    return (
      <View style={theme.styles.fullContainer}>
        <View style={theme.styles.listContainer}>
          <NoteListItem />
        </View>
        {(Platform.OS === 'android') && <ActionButton {...params.actionButton} />}
      </View>
    );
  }
}
