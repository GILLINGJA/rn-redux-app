import { StyleSheet } from 'react-native';

/**
 COLOUR theme for Lecture Notes App
 */
const primaryColour = '#966FD6';
const primaryColourDark = '#6149A0';
const primaryColourLight = '#B3B7EE';
const textColourLight = '#FFFFFF';
const textColourMid = '#777777';
const textColourDark = '#666666';
const textColourDarkest = '#333333';

export default {
  primaryColour,
  primaryColourDark,
  primaryColourLight,
  textColourLight,
  textColourMid,
  textColourDark,
  textColourDarkest,
  styles: StyleSheet.create({
    /*
     * Utility Bar Styles
     */
    utilityBar: {
      height: 60,
      backgroundColor: primaryColour
    },

    utilButtonGroup: {
      flexDirection: 'row'
    },

    utilButton: {
      width: 40,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: primaryColour
    },

    utilButtonHighlight: {
      width: 40,
      height: 40,
      marginLeft: 2,
      marginRight: 2,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },

    utilIcon: {
      color: textColourLight,
      fontSize: 24
    },

    /*
     * Loading Styles
     */
    loadingContainer: {
      backgroundColor: primaryColourLight,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    loadingText: {
      color: textColourDark,
      fontSize: 32
    },

    /*
     * Screen Container Styles
     */
     fullContainer: {
       flex: 1,
       alignSelf: 'stretch',
       backgroundColor: textColourLight
     },

    /*
     * NoteList Styles
     */
    list: {
      flex: 1,
      borderWidth: 2,
      borderColor: primaryColourDark
    },

    /*
     * Note List Item Styles
     */
    itemContainer: {
      height: 80,
      paddingLeft: 6,
      paddingRight: 6,
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderColor: primaryColourLight
    },

    itemTitleContainer: {
      paddingTop: 4,
      paddingRight: 40
    },

    itemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: textColourDark
    },

    itemInfoContainer: {
      paddingBottom: 4,
      flexDirection: 'row'
    },

    itemContentWrap: {
      flex: 2,
      paddingTop: 10
    },

    itemDateWrap: {
      flex: 1,
      marginLeft: 20
    },

    itemContent: {
      fontSize: 14
    },

    itemDate: {
      fontSize: 14
    },

    /*
     * NoteDetails Styles
     */
     editorContainer: {
      flex: 1,
      padding: 2,
      alignSelf: 'stretch'
    },

    header: {
      // borderWidth: 2,
      // borderColor: '#f00'
    },

    titleContainer: {
      // borderWidth: 2,
      // borderColor: '#6b0'
    },

    title: {
      color: textColourDark,
      fontSize: 20,
      fontWeight: 'bold'
    },

    metaContainer: {
      // borderWidth: 2,
      // borderColor: '#00f',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    metaLeft: {
      // borderWidth: 2,
      // borderColor: '#f0f',
      flexDirection: 'row',
      marginHorizontal: 10
    },

    metaRight: {
      // borderWidth: 2,
      // borderColor: '#0f0',
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginHorizontal: 10
    },

    metaBtn: {
      height: 30,
      marginHorizontal: 10,
      fontSize: 20,
      color: '#966fd6'
    },

    metaBtnL: {
      height: 30,
      fontSize: 20,
      color: primaryColour
    },

    metaText: {
      height: 30,
      fontSize: 18,
      marginHorizontal: 10,
      color: primaryColour
    },

    editorContent: {
      flex: 1,
      margin: 2,
      alignSelf: 'stretch'
    },

    contentText: {
      flex: 1,
      alignSelf: 'stretch',
      textAlignVertical: 'top',
      fontSize: 16,
      color: textColourDark
    },

    /*
     * Keybaord Toolbar Styles
     */
     toolbar: {
       height: 50,
       paddingLeft: 1,
       paddingRight: 1,
       justifyContent: 'space-between',
       backgroundColor: textColourDark
     },

     toolButton: {
       height: 45,
       width: 45,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'transparent'
     },

     toolButtonOn: {
       height: 45,
       width: 45,
       margin: 2,
       borderRadius: 5,
       backgroundColor: textColourDarkest
     },

     toolButtonOff: {
       height: 45,
       width: 45,
       margin: 2,
       borderRadius: 5,
       backgroundColor: textColourDark
     },

     toolIconOn: {
       fontSize: 20,
       color: primaryColourLight
     },

     toolIconOff: {
       fontSize: 20,
       color: textColourLight
     },

     toolEdge: {
       position: 'absolute',
       bottom: 0,
       right: 0,
       height: 50,
       width: 20,
       backgroundColor: textColourDark,
       alignItems: 'flex-start',
       justifyContent: 'center'
     },

     toolEdgeTri: {
       position: 'absolute',
       bottom: 0,
       right: 20,
       height: 0,
       width: 20,
       borderStyle: 'solid',
       borderBottomWidth: 50,
       borderBottomColor: textColourDark,
       borderLeftWidth: 15,
       borderLeftColor: 'transparent',
       backgroundColor: 'transparent'
     },

     toolEdgeTriBorder: {
       position: 'absolute',
       bottom: 0,
       right: 22,
       height: 0,
       width: 20,
       borderStyle: 'solid',
       borderBottomWidth: 50,
       borderBottomColor: primaryColourLight,
       borderLeftWidth: 15,
       borderLeftColor: 'transparent'
     },

     toolEdgeIcon: {
       fontSize: 20,
       color: primaryColourLight
     }
  })
}
