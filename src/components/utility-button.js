import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';

const UtilityButton = (props) => {
  return (
    <TouchableHighlight
      onPress={(event) => {props.onPress(event)}}
      underlayColor={theme.textColourLight}>
      <View style={theme.styles.utilButton}>
        <FontAwesome style={theme.styles.utilIcon}>{props.children}</FontAwesome>
      </View>
    </TouchableHighlight>
  );
}

export default withNavigation(UtilityButton);
