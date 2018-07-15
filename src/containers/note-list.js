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
import constants from '../constants.js';

import UtilityButton from '../components/utility-button.js';
import NoteListItem from '../components/note-list-item.js';

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: constants.notes
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onMenuBtnPress: () => { alert("Hamburger pressed") },
      onShareBtnPress: () => { alert("Share button pressed") },
      onMoreBtnPress: () => { alert("More button pressed") }
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <UtilityButton onPress={navigation.getParam('onMenuBtnPress')}>{Icons.bars}</UtilityButton>
      ),
      headerRight: (
        <View style={theme.styles.utilButtonGroup}>
          <UtilityButton onPress={navigation.getParam('onShareBtnPress')}>{Icons.shareAlt}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onMoreBtnPress')}>{Icons.ellipsisV}</UtilityButton>
        </View>
      )};
  }

  onAddNote(navigate) {
    navigate('DetailScreen', { noteID: '4321' })
  }

  onViewNote(item) {
    const { navigate } = this.props.navigation;

    navigate('DetailScreen', { note: item });
  }

  renderItem(item) {
    return <NoteListItem onPress={() => this.onViewNote(item)} item={item} />;
  }

  render() {
    const params = {
      noteList: {
        data: this.state.notes,
        keyExtractor: (item) => item.id,
        renderItem: ({item}) => this.renderItem(item)
      },
      actionButton: {
        buttonColor: theme.primaryColour,
        onPress: () => this.onAddNote(this.props.navigation.navigate)
      }
    };

    return (
      <View style={theme.styles.fullContainer}>
        <View style={theme.styles.listContainer}>
          <FlatList {...params.noteList} />
        </View>
        {(Platform.OS === 'android') && <ActionButton {...params.actionButton} />}
      </View>
    );
  }
}
