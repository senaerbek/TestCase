import {Image, View} from 'react-native';
import {styles} from './style';
import React from 'react';
import {StoryModel} from '../../models/storyModel';

export interface StoryProps {
  story: StoryModel;
}
export function Story(props: StoryProps) {
  const {story} = props;

  return (
    <View style={styles.imageContainer}>
      <Image
        source={
          story?.id === -1 ? story.user.imageUri : {uri: story.user.imageUri}
        }
        style={styles.image}
        resizeMode={'stretch'}
      />
    </View>
  );
}
