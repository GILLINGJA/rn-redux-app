import React, { Component } from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';

const ToolbarButton = (props) => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={theme.textColourLight}>
      <View style={theme.styles.toolButton}>
        <FontAwesome style={theme.styles.toolIcon}>{props.children}</FontAwesome>
      </View>
    </TouchableHighlight>
  );
}

export default ToolbarButton;
