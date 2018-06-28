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

import theme from '../theme.js';
import utilityStyles from '../constants.js';

const styles = StyleSheet.create({
  fullContainer: {
    height: '100%'
  },

  listContainer: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const params = {
      actionButton: {
        buttonColor: theme.primaryColour,
        onPress: () => this.props.navigation.navigate('DetailScreen')
      }
    };

    return (
      <View style={styles.fullContainer}>
        <View style={styles.listContainer}>
          <Text>Note List</Text>
        </View>
        {(Platform.OS === 'android') && <ActionButton {...params.actionButton} />}
      </View>
    );
  }
}
