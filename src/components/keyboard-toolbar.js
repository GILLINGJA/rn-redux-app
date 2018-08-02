import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import ToolbarButton from './toolbar-button.js';

import theme from '../theme.js';

const KeyboardToolbar = () => {
  return (
    <KeyboardAvoidingView style={theme.styles.toolbar}>
      <ScrollView horizontal={true}>
        <ToolbarButton>{Icons.bold}</ToolbarButton>
        <ToolbarButton>{Icons.italic}</ToolbarButton>
        <ToolbarButton>{Icons.underline}</ToolbarButton>
        <ToolbarButton>{Icons.strikethrough}</ToolbarButton>
        <ToolbarButton>{Icons.checkSquare}</ToolbarButton>
        <ToolbarButton>{Icons.listUl}</ToolbarButton>
        <ToolbarButton>{Icons.listOl}</ToolbarButton>
        <ToolbarButton>{Icons.indent}</ToolbarButton>
        <ToolbarButton>{Icons.outdent}</ToolbarButton>
        <ToolbarButton>{Icons.superscript}</ToolbarButton>
        <ToolbarButton>{Icons.subscript}</ToolbarButton>
        <View style={{width: 30}}></View>
      </ScrollView>
      <View style={theme.styles.toolEdgeBorder}></View>
      <View style={theme.styles.toolEdge}></View>
    </KeyboardAvoidingView>
  );
}

export default KeyboardToolbar;
