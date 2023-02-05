import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  imageContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.mainColors.accentStroke,
  },
});
