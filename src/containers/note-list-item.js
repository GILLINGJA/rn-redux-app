import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Animated
} from 'react-native';

import theme from '../theme.js';

import { getCustomDateFormat } from '../constants.js';

export default class NoteListItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  checkIfToday() {
    let date = new Date(this.props.item.dateUpdated);
    let today = new Date();

    if(date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear())
      return true;

    return false;
  }

  // Animation
  handlePressIn = () => {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 1000
    }).start();
  }

  handlePressOut = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500
    }).start();
  }

  render() {
    const onPress = this.props.onPress ? this.props.onPress : () => { console.log('Failed to load onPress prop'); };
    const onLongPress = this.props.onLongPress ? this.props.onLongPress : () => { console.log('Failed to load onLongPress prop'); }

    // ANIMATION
    const interpolateColour = this.animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [theme.textColourLight, theme.primaryColourLight]
    });
    const animatedStyle = {
      backgroundColor:  interpolateColour
    };

    return (
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        underlayColor={theme.primaryColourLight}>
        <Animated.View style={[theme.styles.itemContainer, animatedStyle]}>
          <View style={theme.styles.itemTitleContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={theme.styles.itemTitle}>{this.props.item.title}</Text>
          </View>
          <View style={theme.styles.itemInfoContainer}>
            <View style={theme.styles.itemContentWrap}>
              <Text
                numberOfLines={2}
                ellipsizeMode='tail'
                style={theme.styles.itemContent}>{this.props.item.content}</Text>
            </View>
            <View style={theme.styles.itemDateWrap}>
              <Text style={theme.styles.itemDate}>Last Updated: {getCustomDateFormat(this.checkIfToday(), this.props.item.dateUpdated)}</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableHighlight>
    );
  }
};
