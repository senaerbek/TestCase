import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ECEEEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  tabBarView: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  photoIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },
});
