import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {FONT_FAMILY_REGULAR} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grays.whiteWithOpacity,
    height: 100,
    borderRadius: 33,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorder: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 1,
    borderColor: colors.grays.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  messageContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  user: {
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    color: colors.grays.black,
  },
  message: {
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
    color: colors.grays.gray,
    marginTop: 10,
  },
});
