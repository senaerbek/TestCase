import {Text, View} from 'react-native';
import {styles} from './style';
import React from 'react';
import {User} from '../../models/userModel';

interface ChatBubbleProps {
  message: any;
  user: User;
}
export function ChatBubble(props: ChatBubbleProps) {
  const {message, user} = props;

  return (
    <View
      style={[
        styles.chatBubble,
        message.sender.id === user?.id ? styles.right : styles.left,
      ]}>
      <Text style={styles.message}>{message.message}</Text>
    </View>
  );
}
