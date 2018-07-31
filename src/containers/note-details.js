import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
  ToastAndroid
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import * as actions from '../actions.js';

import theme from '../theme.js';

import UtilityButton from '../components/utility-button.js';
import { getCustomDateFormat } from '../constants.js';

class NoteDetails extends Component {
  constructor(props) {
    super(props);

    let titleFocus = false;

    this.state = {
      note: props.navigation.getParam('note')
        || this.newNote(props.navigation.getParam('noteID', 'NO-ID'))
    };
  }

  componentDidMount() {
    console.log("Date created: ", this.state.note.dateCreated);
    this.props.navigation.setParams({
      pressBack: () => { this.props.navigation.goBack() },
      onUtilBtnPress: () => { alert("Utility button pressed") }
    });
  }

  newNote(id) {
    this.titleFocus = true;

    let today = new Date();
    return {
          id: id,
          title: '',
          content: '',
          dateCreated: today,
          dateUpdated: today
        };
  }

  onChangeField(text, field) {
    const note = Object.assign({}, this.state.note)
    note[field] = text;
    note.dateUpdated = new Date();
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

  componentWillUnmount() {
    const note = Object.assign({}, this.state.note);

    if(note.content.length === 0 && note.title.length === 0) {
      ToastAndroid.show("Cannot save empty note", ToastAndroid.SHORT);
    } else if(note.title.length === 0) {
      note.title = 'Untitled Note';
      this.props.saveNote(note);
    } else {
      this.props.saveNote(this.state.note);
    }
  }

  render() {
    if(this.props.loading) {
      return ( <LoadingView /> );
    }

    return (
      <View style={theme.styles.fullContainer}>
        {/* EDITOR
          > Note Header
            - Title Field
            - Metadata
              * Notebook
              * Reminder
              * Information
          > Note Content
            - Text Field */}
        <ScrollView contentContainerStyle={theme.styles.editorContainer}>
          <View style={theme.styles.header}>
            <View style={theme.styles.titleContainer}>
              <TextInput style={theme.styles.title}
                placeholder='Title'
                autoFocus={this.titleFocus}
                autoCapitalize='words'
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
            autoFocus={!this.titleFocus}
            autoCapitalize='sentences'
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={text => this.onChangeField(text, 'content')}
            value={this.state.note.content} />
          </View>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes.find(n => n.id === ownProps.navigation.state.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNote: (note) => dispatch(actions.saveNote(note))
  };
};

const NoteDetailScreen = connect(mapStateToProps, mapDispatchToProps)(NoteDetails);

export default NoteDetailScreen;
