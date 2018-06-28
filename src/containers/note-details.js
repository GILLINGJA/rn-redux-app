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

const styles = StyleSheet.create({
  fullContainer: {
    height: '100%',
    justifyContent: 'space-around'
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
      <View style={styles.fullContainer}>
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
        <ScrollView contentContainerStyle={styles.editorContainer}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <TextInput style={styles.title}
                placeholder='Title'
                underlineColorAndroid={theme.primaryColour} />
            </View>
            <View style={styles.metaContainer}>
              <View style={styles.metaLeft}>
                <FontAwesome style={styles.metaBtn}>{Icons.book}</FontAwesome>
                <Text style={styles.metaText}>Notebook</Text>
              </View>
              <View style={styles.metaRight}>
                <FontAwesome style={styles.metaBtn}>{Icons.bell}</FontAwesome>
                <FontAwesome style={styles.metaBtn}>{Icons.tag}</FontAwesome>
                <FontAwesome style={styles.metaBtn}>{Icons.infoCircle}</FontAwesome>
              </View>
            </View>
          </View>

          <View style={styles.editorContent}>
            <TextInput style={styles.contentText}
            placeholder="Take some notes"
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)' />
          </View>
      </ScrollView>
      </View>
    );
  }
}
