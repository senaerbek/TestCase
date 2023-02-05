import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Message} from '../Message';
import {styles} from './style';
import {MessageModel} from '../../models/messageModel';

interface MessageListProps {
  messageList: MessageModel[];
}
export function MessageList(props: MessageListProps) {
  const {messageList} = props;

  return (
    <FlatList
      data={messageList}
      renderItem={({item}) => (
        <View style={styles.messageContainer}>
          <Message message={item} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
