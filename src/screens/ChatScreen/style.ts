import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {FONT_FAMILY_REGULAR} from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grays.white,
  },
  body: {
    flex: 1,
    marginHorizontal: 25,
  },
  leftArrowView: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: 20,
  },
  leftArrow: {
    width: 20,
    height: 20,
  },
  infoBackground: {
    flex: 0.5,
    marginHorizontal: 25,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoView: {
    width: '200%',
    height: '200%',
    position: 'absolute',
    right: '40%',
    bottom: '-40%',
  },
  infoItem: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 20,
  },
  infoImageView: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  infoImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    color: colors.grays.black,
  },
  status: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: colors.grays.gray,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  chatBubbleContainer: {
    marginTop: 16,
  },
  inputContainer: {
    marginTop: 16,
    flexDirection: 'row',
    height: 80,
    backgroundColor: colors.grays.white,
    margin: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 80,
  },
  messageInputView: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  messageSendView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMessage: {
    width: 80,
    height: 80,
  },
});
