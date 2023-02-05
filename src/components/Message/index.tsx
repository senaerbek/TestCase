import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {MessageModel} from '../../models/messageModel';
import {useNavigation} from '@react-navigation/native';

interface MessageProps {
  message: MessageModel;
}
export function Message(props: MessageProps) {
  const navigation = useNavigation();
  const {message} = props;

  const navigateToMessageDetail = useCallback(() => {
    navigation.navigate('MessageDetail', {message});
  }, [message, navigation]);

  return (
    <TouchableOpacity
      onPress={navigateToMessageDetail}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri: message.user.imageUri}}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Text numberOfLines={1} style={styles.user}>
          {message.user.name} {message.user.surname}
        </Text>
        <Text numberOfLines={2} style={styles.message}>
          {message.message.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
