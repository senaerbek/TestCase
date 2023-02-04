import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '200%',
    height: '200%',
    position: 'absolute',
    top: '-75%',
    right: '-10%',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 50,
  },
  flatListStyle: {
    flexGrow: 0,
  },
  splashImage: {
    width: width,
    height: 250,
  },
  nextButtonContainer: {
    position: 'absolute',
    bottom: -70,
    right: -70,
  },
  nextButton: {
    width: 250,
    height: 250,
  },
  paginationView: {
    marginTop: 50,
    flexDirection: 'row',
  },
  dot: {
    borderColor: '#000000',
    borderWidth: 1,
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  selectedDot: {
    backgroundColor: '#000000',
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
