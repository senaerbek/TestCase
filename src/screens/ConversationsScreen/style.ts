import {StyleSheet} from 'react-native';
import {FONT_FAMILY_BOLD} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    marginTop: 25,
    marginHorizontal: 25,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 25,
    marginVertical: 30,
  },
  imageBackground: {
    width: '250%',
    height: '250%',
    position: 'absolute',
    top: '-60%',
    right: '0%',
    left: '-85%',
    bottom: '0%',
    zIndex: -1,
  },
  headerLeft: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  sendMessageIconView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMessageIcon: {
    width: 100,
    height: 100,
  },
  searchContainer: {
    marginBottom: 30,
  },
});
