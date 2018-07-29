import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import * as actions from '../actions.js';

import theme from '../theme.js';

import LoadingView from '../components/loading.js';
import UtilityButton from '../components/utility-button.js';
import NoteListItem from '../components/note-list-item.js';
import uuidv4 from 'uuid/v4';

class NoteList extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      onMenuBtnPress: () => { alert('Hamburger pressed') },
      onShareBtnPress: () => { alert('Share button pressed') },
      onMoreBtnPress: () => { alert('More button pressed') }
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
    navigate('DetailScreen', { noteID: uuidv4() });
  }

  onViewNote(item) {
    const { navigate } = this.props.navigation;
    navigate('DetailScreen', { note: item });
  }

  onFinaliseDelete(item) {
    this.props.deleteNote(item.id);
  }

  onDeleteNote(item) {
    Alert.alert(
      'Delete Note',
      'Are you sure you wish to delete this note?',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'Delete', onPress: () => this.onFinaliseDelete(item)}
      ],
      { cancelable: false });
  }

  renderItem(item) {
    return <NoteListItem item={item} onPress={() => this.onViewNote(item)} onLongPress={() => this.onDeleteNote(item)} />;
  }

  render() {
    const params = {
      noteList: {
        data: this.props.notes,
        keyExtractor: (item) => item.id,
        renderItem: ({item}) => this.renderItem(item)
      },
      actionButton: {
        buttonColor: theme.primaryColour,
        onPress: () => this.onAddNote(this.props.navigation.navigate)
      }
    };

    if(this.props.loading) {
      return ( <LoadingView /> );
    }

    return (
      <View style={theme.styles.fullContainer}>
        <FlatList {...params.noteList} />
        {(Platform.OS === 'android') && <ActionButton {...params.actionButton} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(actions.deleteNote({id}))
  };
};

const NoteListScreen = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default NoteListScreen;
