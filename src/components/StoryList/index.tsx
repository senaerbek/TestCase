import React, {useMemo} from 'react';
import {styles} from './style';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Story} from '../Story';
import {StoryModel} from '../../models/storyModel';

const StoryListData: StoryModel[] = [
  {
    id: 1,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    },
  },
  {
    id: 2,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    },
  },
  {
    id: 3,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    },
  },
  {
    id: 4,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    },
  },
  {
    id: 5,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    },
  },
];

export function StoryList() {
  const fakeData = useMemo(() => {
    return [
      {
        id: -1,
        user: {
          imageUri: require('./images/story.png'),
        },
      },
      ...StoryListData,
    ];
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={fakeData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Story story={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
