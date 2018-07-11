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
import testData from '../constants.js';

import LoadingView from '../components/loading.js';
import UtilityButton from '../components/utility-button.js';
import NoteListItem from '../components/note-list-item.js';

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: testData.notes };
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
    return ( <NoteListItem item={item} /> );
  }

  render() {
    const params = {
      noteList: {
        style: theme.styles.list,
        data: this.state.notes,
        keyExtractor: (item) => item.id,
        renderItem: ({ item }) => { this.renderItem(item) }
      },
      actionButton: {
        buttonColor: theme.primaryColour,
        onPress: () => this.props.navigation.navigate('DetailScreen')
      }
    };

    if(this.props.loading) {
      return ( <LoadingView /> );
    }

    return (
      <View style={theme.styles.fullContainer}>
        <View style={theme.styles.listContainer}>
          {/* <FlatList {...params.noteList} /> */}
          {/* <Text>{'There are ' + params.noteList.data.length + ' notes in this list.\n' +
                  'The ID of the first note is ' + params.noteList.data[0].id}</Text> */}
          <NoteListItem  />
        </View>
        {(Platform.OS === 'android') && <ActionButton {...params.actionButton} />}
      </View>
    );
  }
}
