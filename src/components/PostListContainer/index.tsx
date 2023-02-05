import React from 'react';
import {FlatList, View} from 'react-native';
import {Post} from '../Post';
import {styles} from './style';
import {PostModel} from '../../models/postModel';

const postData: PostModel[] = [
  {
    id: 1,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    },
    imageUri:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    caption: 'Beautiful place',
    likesCount: '5.6K',
    postedAt: '6 minutes ago',
    bookmarkCount: '1.2K',
    commentCount: '1.2K',
  },
  {
    id: 2,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    },
    imageUri:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
    caption: 'Beautiful place',
    likesCount: '5.6K',
    postedAt: '6 minutes ago',
    bookmarkCount: '1.2K',
    commentCount: '1.2K',
  },
  {
    id: 3,
    user: {
      name: 'Lukas',
      surname: 'Petr',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    },
    imageUri:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
    caption: 'Beautiful place',
    likesCount: '5.6K',
    postedAt: '6 minutes ago',
    bookmarkCount: '1.2K',
    commentCount: '1.2K',
  },
];

export function PostListContainer() {
  return (
    <FlatList
      data={postData}
      renderItem={({item}) => (
        <View style={styles.postContainer}>
          <Post post={item} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
