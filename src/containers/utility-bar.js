import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-fa-icons';

import theme from '../theme.js';

const utilityStyles = StyleSheet.create({
  utilityBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.primaryColour
  },

  utilButtonGroup: {
    flexDirection: 'row'
  },

  utilButton: {
    width: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primaryColour
  },

  utilIcon: {
    color: theme.textColourLight,
    fontSize: 20
  },

  leftIcon: {
    color: theme.textColourLight,
    fontSize: 30
  }
});

class UtilityBar extends Component {
  render() {
    return (
      <View style={styles.utilityBar}>

        <View style={styles.utilButtonGroup}>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.leftIcon}>Back</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.utilButtonGroup}>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>Un</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>Re</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>F</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>P</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>E</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>A</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>:</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default withNavigation(UtilityBar);
