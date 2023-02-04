import {StyleSheet} from 'react-native';
import {FONT_FAMILY_BOLD} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLeft: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  notifButton: {
    width: 20,
    height: 20,
  },
});
