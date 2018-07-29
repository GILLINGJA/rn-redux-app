import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import theme from '../theme.js';

import { getCustomDateFormat } from '../constants.js';

const NoteListItem = (props) => {
  const onPress = props.onPress ? props.onPress : () => { console.log('Failed to load onPress prop'); };
  const onLongPress = props.onLongPress ? props.onLongPress : () => { console.log('Failed to load onLongPress prop'); }

  const checkIfToday = () => {
    let date = new Date(props.item.dateUpdated);
    let today = new Date();

    if(date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear())
      return true;

    return false;
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={theme.primaryColourLight}>
      <View style={theme.styles.itemContainer}>
        <View style={theme.styles.itemTitleContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={theme.styles.itemTitle}>{props.item.title}</Text>
        </View>
        <View style={theme.styles.itemInfoContainer}>
          <View style={theme.styles.itemContentWrap}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={theme.styles.itemContent}>{props.item.content}</Text>
          </View>
          <View style={theme.styles.itemDateWrap}>
            <Text style={theme.styles.itemDate}>Last Updated: {getCustomDateFormat(checkIfToday(), props.item.dateUpdated)}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default NoteListItem;
