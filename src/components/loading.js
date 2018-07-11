import React, { Component } from 'react';
import { View, Text } from 'react-native';
import theme from '../theme.js';

const LoadingView = (props) => {
  return (
      <View style={theme.styles.loadingContainer}>
        <Text style={theme.styles.loadingText}>Loading...</Text>
      </View>
    );
}

export default LoadingView;
