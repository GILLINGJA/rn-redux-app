import React, { Component } from 'react';
import { Stylesheet, View, Text } from 'react-native';
import colourTheme from '../theme.js';

const LoadingView (props) => {
  render() {
    const styles = Stylesheet.create({
      container: {
        backgroundColor: colourTheme.primaryColourLight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: {colourTheme.textColourDark}
      }
    });

    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default LoadingView;
