import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {styles} from './style';
import {StoryList} from '../../components/StoryList';
import {PostListContainer} from '../../components/PostListContainer';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Feed</Text>
        </View>
        <StoryList />
        <View style={styles.postListContainer}>
          <PostListContainer />
        </View>
      </ScrollView>
    </View>
  );
}
