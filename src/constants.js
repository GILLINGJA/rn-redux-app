import { StyleSheet } from 'react-native';
import theme from './theme.js';

export default StyleSheet.create({
  utilityBar: {
    height: 60,
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
    fontSize: 24
  },

  utilIconLeft: {
    color: theme.textColourLight,
    fontSize: 30
  }
});
