import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {FONT_FAMILY_REGULAR} from '../../themes/fonts';

export const styles = StyleSheet.create({
  chatBubble: {
    maxWidth: Dimensions.get('screen').width * 0.6,
    backgroundColor: '#fafafa',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  left: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  right: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  message: {
    color: colors.grays.black,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
