import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {FONT_FAMILY_REGULAR} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 328,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  userImageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userNameContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  userName: {
    color: colors.grays.white,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  date: {
    color: colors.grays.lightGray,
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.grays.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 30,
    backgroundColor: colors.grays.lightGray,
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: colors.grays.white,
    marginRight: 5,
  },
  buttonText: {
    color: colors.grays.white,
    fontSize: 12,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
