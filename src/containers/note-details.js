import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';
import utilityStyles from '../constants.js';

import UtilityButton from '../components/utility-button.js';

const styles = StyleSheet.create({
  fullContainer: {
    height: '100%'
  },

  editorContainer: {
    flex: 1,
    padding: 2,
    alignSelf: 'stretch'
  },

  header: {
    // borderWidth: 2,
    // borderColor: '#f00'
  },

  titleContainer: {
    // borderWidth: 2,
    // borderColor: '#6b0'
  },

  title: {
    color: '#966fd6',
    fontSize: 16,
    fontWeight: 'bold'
  },

  metaContainer: {
    // borderWidth: 2,
    // borderColor: '#00f',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  metaLeft: {
    // borderWidth: 2,
    // borderColor: '#f0f',
    flexDirection: 'row',
    marginHorizontal: 10
  },

  metaRight: {
    // borderWidth: 2,
    // borderColor: '#0f0',
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },

  metaBtn: {
    height: 30,
    fontSize: 16,
    color: '#966fd6'
  },

  metaText: {
    height: 30,
    fontSize: 14,
    marginHorizontal: 10,
    color: '#966fd6'
  },

  editorContent: {
    flex: 1,
    margin: 2,
    alignSelf: 'stretch'
  },

  contentText: {
    flex: 1,
    alignSelf: 'stretch',
    textAlignVertical: 'top',
    color: '#666'
  }
});

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
        <UtilityButton onPress={navigation.getParam('pressBack')}>{Icons.angleLeft}</UtilityButton>
      ),
      headerRight: (
        <View style={theme.styles.utilButtonGroup}>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.pencil}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.paperclip}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.ellipsisV}</UtilityButton>
        </View>
      )};
  }

  render() {
    return (
      <View style={theme.styles.fullContainer}>
        {/* EDITOR
          > Note Header
            - Title Field
            - Metadata
              * Notebook
              * Reminder
              * Tags
              * Information
          > Note Content
            - Text Field */}
        <ScrollView contentContainerStyle={theme.styles.editorContainer}>
          <View style={theme.styles.header}>
            <View style={theme.styles.titleContainer}>
              <TextInput style={theme.styles.title}
                placeholder='Title'
                underlineColorAndroid={theme.primaryColour} />
            </View>
            <View style={theme.styles.metaContainer}>
              <View style={theme.styles.metaLeft}>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.book}</FontAwesome>
                <Text style={theme.styles.metaText}>Notebook</Text>
              </View>
              <View style={theme.styles.metaRight}>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.bell}</FontAwesome>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.tag}</FontAwesome>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.infoCircle}</FontAwesome>
              </View>
            </View>
          </View>

          <View style={theme.styles.editorContent}>
            <TextInput style={theme.styles.contentText}
            placeholder="Take some notes"
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)' />
          </View>
      </ScrollView>
      </View>
    );
  }
}
