import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import * as actions from '../actions.js';

import theme from '../theme.js';
//import notes from '../constants.js';

import LoadingView from '../components/loading.js';
import UtilityButton from '../components/utility-button.js';
import NoteListItem from '../components/note-list-item.js';
import uuidv4 from 'uuid/v4';

let notesArray = [
      {
        id: '0000',
        title: 'Note1',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0001',
        title: 'Note2',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0002',
        title: 'Note3',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0003',
        title: 'Note4',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0004',
        title: 'Note1',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0005',
        title: 'Note2',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0006',
        title: 'Note3',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0007',
        title: 'Note4',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },{
        id: '0008',
        title: 'Note1',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0009',
        title: 'Note2',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0010',
        title: 'Note3',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0011',
        title: 'Note4',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },{
        id: '0012',
        title: 'Note1',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0013',
        title: 'Note2',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0014',
        title: 'Note3',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      },
      {
        id: '0015',
        title: 'Note4',
        content: 'Testing 1 2 3 . . . ',
        date: '01/02/2003'
      }
    ];

class NoteList extends Component {
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
    navigate('DetailScreen', { noteID: uuidv4() });
  }

  onViewNote(item) {
    const { navigate } = this.props.navigation;
    navigate('DetailScreen', { note: item });
  }

  renderItem(item) {
    return <NoteListItem onPress={() => this.onViewNote(item)} item={item} />;
  }

  render() {
    console.log('Notes list: ', this.props.notes);
    (this.props.notes === null) ? console.log('Notes list variable is null') :
    console.log('Notes list variable is of the type: ', (typeof this.props.notes));
    const params = {
      noteList: {
        data: this.props.notes,
        keyExtractor: (item) => {console.log("Note Title: ", item.title); return item.id},
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

// const mapDispatchToProps = (dispatch) => {
//   return {  };
// };

const NoteListScreen = connect(mapStateToProps)(NoteList);

export default NoteListScreen;
