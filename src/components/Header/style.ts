import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
