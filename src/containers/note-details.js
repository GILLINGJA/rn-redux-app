import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';
import utilityStyles from '../constants.js';

export default class NoteDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      pressBack: () => { this.props.navigation.goBack() },
      onUtilBtnPress: () => { alert("Utility button pressed") }
  });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableHighlight
          onPress={navigation.getParam('pressBack')}
          underlayColor='#fff'>
          <View style={utilityStyles.utilButton}>
            <FontAwesome style={utilityStyles.utilIcon}>{Icons.angleLeft}</FontAwesome>
          </View>
        </TouchableHighlight>
      ),
      headerRight: (
        <View style={utilityStyles.utilButtonGroup}>
          <TouchableHighlight
            onPress={navigation.getParam('onUtilBtnPress')}
            underlayColor='#fff'>
            <View style={utilityStyles.utilButton}>
              <FontAwesome style={utilityStyles.utilIcon}>{Icons.pencil}</FontAwesome>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={navigation.getParam('onUtilBtnPress')}
            underlayColor='#fff'>
            <View style={utilityStyles.utilButton}>
              <FontAwesome style={utilityStyles.utilIcon}>{Icons.paperclip}</FontAwesome>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={navigation.getParam('onUtilBtnPress')}
            underlayColor='#fff'>
            <View style={utilityStyles.utilButton}>
              <FontAwesome style={utilityStyles.utilIcon}>{Icons.ellipsisV}</FontAwesome>
            </View>
          </TouchableHighlight>
        </View>
      )};
  }

  render() {
    return (
      <View><Text>Note Details</Text></View>
    );
  }
}
