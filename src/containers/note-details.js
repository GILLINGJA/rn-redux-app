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

import UtilityButton from '../components/utility-button.js';

export default class NoteDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.navigation.getParam('note', {
        id: 'noluck',
        title: 'FAIL',
        content: 'Failed to load note through navigation params.',
        date: 'Never'
      }) || this.newNote(props.navigation.getParam('noteID', 'NO-ID'))
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      pressBack: () => { this.props.navigation.goBack() },
      onUtilBtnPress: () => { alert("Utility button pressed") }
  });
  }

  newNote(id) {
    this.setState({
      note: {
        id: id,
        title: 'Hello',
        content: 'World',
        date: '14/07/2018'
      }
    });
  }

  onChangeField(text, field) {
    const note = Object.assign({}, this.state.note)
    note[field] = text;
    this.setState({ note });
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
                underlineColorAndroid={theme.primaryColour}
                onChangeText={text => this.onChangeField(text, 'title')}
                value={this.state.note.title} />
            </View>
            <View style={theme.styles.metaContainer}>
              <View style={theme.styles.metaLeft}>
                <FontAwesome style={theme.styles.metaBtnL}>{Icons.book}</FontAwesome>
                <Text style={theme.styles.metaText}>Notebook</Text>
              </View>
              <View style={theme.styles.metaRight}>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.bell}</FontAwesome>
                <FontAwesome style={theme.styles.metaBtn}>{Icons.infoCircle}</FontAwesome>
              </View>
            </View>
          </View>

          <View style={theme.styles.editorContent}>
            <TextInput style={theme.styles.contentText}
            placeholder="Take some notes"
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={text => this.onChangeField(text, 'content')}
            value={this.state.note.content} />
          </View>
      </ScrollView>
      </View>
    );
  }
}
