import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TextInput,
  ToastAndroid,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import * as actions from '../actions.js';

import theme from '../theme.js';

import UtilityButton from '../components/utility-button.js';
import ToolbarButton from '../components/toolbar-button.js';
import { getCustomDateFormat } from '../constants.js';

class NoteDetails extends Component {
  constructor(props) {
    super(props);

    let titleFocus = false;

    this.state = {
      contentFocused: false,
      selection: '',
      note: props.navigation.getParam('note')
        || this.newNote(props.navigation.getParam('noteID', 'NO-ID'))
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      pressBack: () => { this.props.navigation.goBack() },
      onUtilBtnPress: () => { alert("Utility button pressed") }
    });
  }

  componentWillUnmount() {
    const note = Object.assign({}, this.state.note);

    if(note.content.length === 0 && note.title.length === 0) {
      ToastAndroid.show("Cannot save an empty note", ToastAndroid.SHORT);
    } else if(note.title.length === 0) {
      note.title = 'Untitled Note';
      this.props.saveNote(note);
    } else {
      this.props.saveNote(this.state.note);
    }

    Keyboard.dismiss();
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

  onFocusContent(focused) {
    this.setState({contentFocused: focused});
  }

  onToolButtonPress = (format, toggle) => {
    console.log(`${format} selection ${toggle}`);

    switch(format) {
      case 'bold':

        break;
      case 'italic':

        break;
      case 'underline':

        break;
      case 'strikethrough':

        break;
      case 'highlighter':

        break;
      case 'checkbox':

        break;
      case 'listUl':

        break;
      case 'listOl':

        break;
      case 'link':

        break;
      case 'indent':

        break;
      case 'outdent':

        break;
      case 'superscript':

        break;
      case 'subscript':

        break;
      case 'code':

        break;
      case 'table':

        break;
      default:
        console.log('Failed to recognise button.');
        break;
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <UtilityButton onPress={navigation.getParam('pressBack')}>{Icons.chevronLeft}</UtilityButton>
      ),
      headerRight: (
        <View style={theme.styles.utilButtonGroup}>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.undo}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.repeat}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.pencil}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.image}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.shareAlt}</UtilityButton>
          <UtilityButton onPress={navigation.getParam('onUtilBtnPress')}>{Icons.ellipsisV}</UtilityButton>
        </View>
      )};
  }

  renderKeyboardToolbar() {
    return (
      <KeyboardAvoidingView
        style={theme.styles.toolbar}>
        <ScrollView horizontal={true} keyboardShouldPersistTaps='always'>
          <ToolbarButton type='bold' onPress={this.onToolButtonPress}>{Icons.bold}</ToolbarButton>
          <ToolbarButton type='italic' onPress={this.onToolButtonPress}>{Icons.italic}</ToolbarButton>
          <ToolbarButton type='underline' onPress={this.onToolButtonPress}>{Icons.underline}</ToolbarButton>
          <ToolbarButton type='strikethrough' onPress={this.onToolButtonPress}>{Icons.strikethrough}</ToolbarButton>
          <ToolbarButton type='highlighter' onPress={this.onToolButtonPress}>{Icons.paintBrush}</ToolbarButton>
          <ToolbarButton type='checkSquare' onPress={this.onToolButtonPress}>{Icons.checkSquare}</ToolbarButton>
          <ToolbarButton type='listUl' onPress={this.onToolButtonPress}>{Icons.listUl}</ToolbarButton>
          <ToolbarButton type='listOl' onPress={this.onToolButtonPress}>{Icons.listOl}</ToolbarButton>
          <ToolbarButton type='link' onPress={this.onToolButtonPress}>{Icons.link}</ToolbarButton>
          <ToolbarButton type='indent' onPress={this.onToolButtonPress}>{Icons.indent}</ToolbarButton>
          <ToolbarButton type='outdent' onPress={this.onToolButtonPress}>{Icons.outdent}</ToolbarButton>
          <ToolbarButton type='superscript' onPress={this.onToolButtonPress}>{Icons.superscript}</ToolbarButton>
          <ToolbarButton type='subscript' onPress={this.onToolButtonPress}>{Icons.subscript}</ToolbarButton>
          <ToolbarButton type='code' onPress={this.onToolButtonPress}>{Icons.code}</ToolbarButton>
          <ToolbarButton type='table' onPress={this.onToolButtonPress}>{Icons.table}</ToolbarButton>
          <View style={{width: 50}}></View>
        </ScrollView>
        <View style={theme.styles.toolEdgeTriBorder}></View>
        <View style={theme.styles.toolEdgeTri}></View>
        <View style={theme.styles.toolEdge}>
          <FontAwesome style={theme.styles.toolIconOn}>{Icons.chevronRight}</FontAwesome>
        </View>
      </KeyboardAvoidingView>
    );
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
        <ScrollView
          contentContainerStyle={theme.styles.editorContainer}
          keyboardShouldPersistTaps='handled' >
          <View style={theme.styles.header}>
            <View style={theme.styles.titleContainer}>
              <TextInput style={theme.styles.title}
                placeholder='Title'
                returnKeyType='next'
                // autoFocus={this.titleFocus}
                onFocus={() => this.onFocusContent(false)}
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
            // autoFocus={!this.titleFocus}
            onFocus={() => this.onFocusContent(true)}
            autoCapitalize='sentences'
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={text => this.onChangeField(text, 'content')}
            value={this.state.note.content} />
          </View>
      </ScrollView>
      {this.state.contentFocused && this.renderKeyboardToolbar()}
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
    saveNote: (note) => dispatch(actions.saveNote(note)),
    formatBold: (selection) => dispatch(actions.formatBold(selection)),
    // formatItalic: (selection) => dispatch(actions.formatItalic(selection)),
    // formatStrikethrough: (selection) => dispatch(actions.formatStrikethrough(selection)),
    // formatHighlighter: (selection) => dispatch(actions.formatHighlighter(selection)),
    // formatCheckbox: (selection) => dispatch(actions.formatCheckbox(selection)),
    // formatUnorderedList: (selection) => dispatch(actions.formatUnorderedList(selection)),
    // formatOrderedList: (selection) => dispatch(actions.formatOrderedList(selection)),
    // formatLink: (selection) => dispatch(actions.formatLink(selection)),
    // formatIndent: (selection) => dispatch(actions.formatIndent(selection)),
    // formatOutdent: (selection) => dispatch(actions.formatOutdent(selection)),
    // formatSuperscript: (selection) => dispatch(actions.formatSuperscript(selection)),
    // formatSubscript: (selection) => dispatch(actions.formatSubscript(selection)),
    // formatCode: (selection) => dispatch(actions.formatCode(selection)),
    // formatTable: (selection) => dispatch(actions.formatTable(selection))
  };
};

const NoteDetailScreen = connect(mapStateToProps, mapDispatchToProps)(NoteDetails);

export default NoteDetailScreen;
