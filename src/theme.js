/**
 COLOUR theme for Lecture Notes App
 */
const primaryColour = '#966FD6';
const primaryColourDark = '#6149A0';
const primaryColourLight = '#B3B7EE';
const textColourLight = '#FFFFFF';
const textColourDark = '#666666';

export default {
  primaryColour,
  primaryColourDark,
  primaryColourLight,
  textColourLight,
  textColourDark,
  styles: {
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

    utilIcon: {
      color: textColourLight,
      fontSize: 24
    },

    /*
     * NoteList Styles
     */
    fullContainer: {
      height: '100%'
    },

    listContainer: {
      flex: 1,
      alignSelf: 'stretch'
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
     * Note List Item Styles
     */
    itemContainer: {
      height: 80,
      paddingLeft: 6,
      paddingRight: 6,
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderColor: primaryColourLight
    },

    itemTitleContainer: {
      paddingTop: 4
    },

    itemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: textColourDark
    },

    itemInfoContainer: {
      paddingBottom: 4,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    itemInfo: {
      fontSize: 14
    }
  }
}
