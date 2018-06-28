import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../theme.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColourLight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loadingText: {
    color: theme.textColourDark,
    fontSize: 32
  }
});

const LoadingView (props) => {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
}

export default LoadingView;
