import React from 'react';
import {Image, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {styles} from './style';
import {StoryList} from '../../components/StoryList';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header
        left={<Text style={styles.headerLeft}>Socially</Text>}
        right={
          <Image
            source={require('./images/notification.png')}
            style={styles.notifButton}
            resizeMode={'stretch'}
          />
        }
      />
      <Image
        source={require('./images/bg.png')}
        style={styles.imageBackground}
        resizeMode={'contain'}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Feed</Text>
      </View>
      <StoryList />
    </View>
  );
}
