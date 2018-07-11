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
  constructor(props) {
    super(props);

    this.state = {
      notes: [
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
      ]
    }
  }

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

  renderItem(item) {
    return <NoteListItem item={item} />;
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
        onPress: () => this.props.navigation.navigate('DetailScreen')
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
