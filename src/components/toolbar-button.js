import React, { Component } from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import theme from '../theme.js';

class ToolbarButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  onToggle(press) {
    let t = !this.state.toggle;

    this.setState({toggle: t});

    press(this.props.type, t);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.onToggle(this.props.onPress)}
        underlayColor={this.state.toggle ? theme.textColourMid : theme.textColourDarkest}
        style={this.state.toggle ? theme.styles.toolButtonOn : theme.styles.toolButtonOff}>
        <View style={theme.styles.toolButton}>
          <FontAwesome style={this.state.toggle ? theme.styles.toolIconOn : theme.styles.toolIconOff}>{this.props.children}</FontAwesome>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ToolbarButton;
