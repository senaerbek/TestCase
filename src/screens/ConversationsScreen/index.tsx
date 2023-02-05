import React, {useMemo, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';
import {MessageList} from '../../components/MessageList';
import {MessageModel} from '../../models/messageModel';
import {SearchInput} from '../../components/SearchInput';

const messageList: MessageModel[] = [
  {
    id: 1,
    user: {
      name: 'User 1',
      surname: 'Doe',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    },
    message: {
      content: 'Hello, how are you?',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
  {
    id: 2,
    user: {
      name: 'User 2',
      surname: 'Doe',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    },
    message: {
      content: 'Hello, how are you?',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
  {
    id: 3,
    user: {
      name: 'John',
      surname: 'Doe',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    },
    message: {
      content: 'Hello, how are you?',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
  {
    id: 4,
    user: {
      name: 'Mike',
      surname: 'Doe',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    },
    message: {
      content: 'Hello, how are you?',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
  {
    id: 5,
    user: {
      name: 'John',
      surname: 'Doe',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    },
    message: {
      content: 'Hello, how are you?',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
];
export function ConversationsScreen() {
  const [search, setSearch] = useState('');

  const filteredMessageList = useMemo(() => {
    return messageList.filter(message =>
      message.user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Header
        left={<Text style={styles.headerLeft}>Socially</Text>}
        right={
          <Image
            source={require('./images/menu.png')}
            style={styles.menuIcon}
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
        <View style={styles.body}>
          <Text style={styles.title}>Messages</Text>
          <View style={styles.searchContainer}>
            <SearchInput onChangeText={setSearch} />
          </View>
          <MessageList messageList={filteredMessageList} />
        </View>
      </ScrollView>
      <View style={styles.sendMessageIconView}>
        <TouchableOpacity>
          <Image
            source={require('./images/send-message.png')}
            style={styles.sendMessageIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
