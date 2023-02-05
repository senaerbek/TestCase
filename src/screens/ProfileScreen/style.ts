import {Dimensions, StyleSheet} from 'react-native';
import {FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR} from '../../themes/fonts';
import {colors} from '../../themes/colors';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginTop: 25,
    marginHorizontal: 25,
  },
  imageBackground: {
    width: '200%',
    height: '200%',
    position: 'absolute',
    top: '-100%',
    right: '0%',
    left: '-50%',
    zIndex: -1,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 25,
    marginVertical: 30,
  },
  leftArrow: {
    width: 20,
    height: 20,
  },
  infoContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 25,
    marginTop: 10,
    color: colors.grays.black,
  },
  nick: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: colors.grays.gray,
  },
  userDataRow: {
    flexDirection: 'row',
    marginVertical: 60,
  },
  userDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    color: colors.grays.gray,
  },
  value: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 25,
    color: colors.grays.black,
  },
  postImage: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 15,
  },
  buttonView: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});
