import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const splashSteps = [
  {
    key: '1',
    image: require('./images/splash1.png'),
  },
  {
    key: '2',
    image: require('./images/splash2.png'),
  },
  {
    key: '3',
    image: require('./images/splash2.png'),
  },
];

export function SplashScreen() {
  const navigation = useNavigation();
  const ref = useRef<FlatList>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const navigateToHome = useCallback(() => {
    navigation.navigate('Main', {screen: 'Dashboard'});
  }, [navigation]);

  const onNextPress = useCallback(() => {
    if (activeStepIndex < splashSteps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else {
      navigateToHome();
    }
  }, [activeStepIndex, navigateToHome]);

  useEffect(() => {
    setTimeout(
      () =>
        ref?.current?.scrollToIndex({index: activeStepIndex, animated: true}),
      100,
    );
  }, [activeStepIndex]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/bg.png')}
        style={styles.backgroundImage}
        resizeMode={'contain'}
      />
      <View style={styles.body}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.title}>Socially</Text>
        <FlatList
          style={styles.flatListStyle}
          ref={ref}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={splashSteps}
          onScrollToIndexFailed={info => {
            const wait = new Promise((resolve: any) =>
              setTimeout(resolve, 500),
            );
            wait.then(() => {
              ref.current?.scrollToIndex({
                index: info.index,
                animated: true,
              });
            });
          }}
          renderItem={({item}) => (
            <Image
              source={item.image}
              style={styles.splashImage}
              resizeMode={'contain'}
            />
          )}
          keyExtractor={item => item.key}
        />
        <View style={styles.paginationView}>
          {splashSteps.map((item, index) => (
            <View
              key={index}
              style={
                index === activeStepIndex ? styles.selectedDot : styles.dot
              }
            />
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.nextButtonContainer}
        onPress={onNextPress}>
        <Image
          source={
            activeStepIndex % 2 === 0
              ? require('./images/blue-next-button.png')
              : require('./images/black-next-button.png')
          }
          style={styles.nextButton}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
}
