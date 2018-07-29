import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import theme from '../theme.js';

const NoteListItem = (props) => {
  const onPress = props.onPress ? props.onPress : () => { };

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={theme.primaryColourLight}>
      <View style={theme.styles.itemContainer}>
        <View style={theme.styles.itemTitleContainer}>
          <Text style={theme.styles.itemTitle}>{props.item.title}</Text>
        </View>
        <View style={theme.styles.itemInfoContainer}>
          <View>
            <Text style={theme.styles.itemInfo}>{props.item.content}</Text>
          </View>
          <View>
            <Text style={theme.styles.itemInfo}>Last Updated: {props.item.dateUpdated}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default NoteListItem;
