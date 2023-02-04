import React from 'react';
import {Image, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {styles} from './style';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header
        left={<Text style={styles.headerLeft}>Socially</Text>}
        right={
          <Image
            source={require('./images/notification.png')}
            style={styles.notifButton}
            resizeMode={'contain'}
          />
        }
      />
    </View>
  );
}
