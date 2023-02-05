import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {PostModel} from '../../models/postModel';

interface PostProps {
  post: PostModel;
}
export function Post(props: PostProps) {
  const {post} = props;

  return (
    <TouchableOpacity>
      <ImageBackground
        source={{
          uri: post.imageUri,
        }}
        borderRadius={20}
        resizeMode={'cover'}
        style={styles.container}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            <Image
              source={{
                uri: post.user.imageUri,
              }}
              style={styles.userImage}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>
              {post.user.name} {post.user.surname}
            </Text>
            <Text style={styles.date}>{post.postedAt}</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require('./images/dots.png')}
              style={styles.icon}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('./images/favorite.png')}
                style={styles.buttonIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.buttonText}>{post.likesCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('./images/message.png')}
                style={styles.buttonIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.buttonText}>{post.commentCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('./images/bookmark.png')}
                style={styles.buttonIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.buttonText}>{post.bookmarkCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
