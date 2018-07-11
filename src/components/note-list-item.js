import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import theme from '../theme.js';

const NoteListItem = () => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={theme.primaryColourLight}>
      <View style={theme.styles.itemContainer}>
        <View style={theme.styles.itemTitleContainer}>
          <Text style={theme.styles.itemTitle}>Title</Text>
        </View>
        <View style={theme.styles.itemInfoContainer}>
          <View>
            <Text style={theme.styles.itemInfo}>Content content content</Text>
          </View>
          <View>
            <Text style={theme.styles.itemInfo}>01/02/2003</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default NoteListItem;
