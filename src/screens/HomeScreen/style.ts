import {StyleSheet} from 'react-native';
import {FONT_FAMILY_BOLD} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginTop: 50,
    marginHorizontal: 25,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '-10%',
    right: '0%',
    left: '-30%',
    zIndex: -1,
  },
  headerLeft: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  notifButton: {
    width: 20,
    height: 20,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 25,
    marginVertical: 30,
  },
});
