import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';

const profileDetails = {
  name: 'John Doe',
  nickname: 'johndoe',
  followersCount: 100,
  followingCount: 200,
  postsCount: 300,
  posts: [
    {
      id: 1,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 2,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 3,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 4,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 5,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 6,
      image: 'https://picsum.photos/300/300',
    },
    {
      id: 7,
      image: 'https://picsum.photos/300/300',
    },
  ],
};
export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header
        left={
          <Image
            source={require('./images/arrow-left.png')}
            style={styles.leftArrow}
            resizeMode={'stretch'}
          />
        }
      />
      <Image
        source={require('./images/bg.png')}
        style={styles.imageBackground}
        resizeMode={'contain'}
      />
      <ScrollView>
        <View style={styles.infoContent}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
            style={styles.image}
            resizeMode={'contain'}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.nick}>@johnDoe</Text>
          <View style={styles.userDataRow}>
            <View style={styles.userDataView}>
              <Text style={styles.infoTitle}>Posts</Text>
              <Text style={styles.value}>1.2M</Text>
            </View>
            <View style={styles.userDataView}>
              <Text style={styles.infoTitle}>Followers</Text>
              <Text style={styles.value}>1.2M</Text>
            </View>
            <View style={styles.userDataView}>
              <Text style={styles.infoTitle}>Follows</Text>
              <Text style={styles.value}>1.2M</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Image
              source={require('./images/photos.png')}
              style={styles.buttonImage}
              resizeMode={'contain'}
            />
            <Image
              source={require('./images/saved.png')}
              style={styles.buttonImage}
              resizeMode={'contain'}
            />
          </View>
          <FlatList
            numColumns={2}
            data={profileDetails.posts}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <Image
                  source={{uri: item.image}}
                  style={styles.postImage}
                  resizeMode={'contain'}
                />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
