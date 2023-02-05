import React, {useState, useCallback, useRef} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import {KeyboardAwareView} from '../../components/KeyboardAwareView';
import {ChatBubble} from '../../components/ChatBubble';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../themes/colors';

const currentUser = {
  id: 1,
  name: 'User 2',
  surname: 'Doe',
  imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
};

export function ChatScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: {
        id: 1,
      },
      message: 'Hey there!',
    },
    {
      sender: {
        id: 1,
      },
      message: 'Hello, how are you doing?',
    },
    {
      sender: {
        id: 2,
      },
      message: 'I am good, how about you?',
    },
    {
      sender: {
        id: 2,
      },
      message: '😊😇',
    },
    {
      sender: {
        id: 1,
      },
      message: "Can't wait to meet you.",
    },
    {
      sender: {
        id: 1,
      },
      message: "That's great, when are you coming?",
    },
  ]);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const scrollToEnd = useCallback(() => {
    if (flatListRef.current) {
      setTimeout(
        () =>
          // @ts-ignore
          flatListRef?.current?.scrollToIndex({
            index: messages.length - 1,
            animated: true,
          }),
        100,
      );
    }
  }, [messages.length]);

  const sendMessage = useCallback(() => {
    if (inputMessage === '') {
      return;
    }
    setMessages([
      {
        sender: {
          id: 1,
        },
        message: inputMessage,
      },
      ...messages,
    ]);
    setInputMessage('');
    scrollToEnd();
  }, [inputMessage, messages, scrollToEnd]);

  return (
    <View style={styles.container}>
      <View style={styles.infoBackground}>
        <TouchableOpacity onPress={onBackPress} style={styles.leftArrowView}>
          <Image
            style={styles.leftArrow}
            source={require('./images/arrow-left.png')}
          />
        </TouchableOpacity>
        <View style={styles.infoImageView}>
          <Image
            style={styles.infoImage}
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
          />
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.status}>Online</Text>
        </View>
        <ImageBackground
          resizeMode={'cover'}
          source={require('./images/bg.png')}
          style={styles.infoView}
        />
      </View>
      <KeyboardAwareView>
        <View style={styles.body}>
          <FlatList
            ref={flatListRef}
            onContentSizeChange={scrollToEnd}
            onLayout={scrollToEnd}
            showsVerticalScrollIndicator={false}
            data={JSON.parse(JSON.stringify(messages)).reverse()}
            renderItem={({item}) => (
              <View style={styles.chatBubbleContainer}>
                <ChatBubble message={item} user={currentUser} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.messageInputView}>
            <TextInput
              value={inputMessage}
              style={styles.messageInput}
              placeholder="Write a message..."
              placeholderTextColor={colors.grays.lightGray}
              onChangeText={text => setInputMessage(text)}
              onEndEditing={sendMessage}
            />
          </View>
          <TouchableOpacity
            onPress={sendMessage}
            style={styles.messageSendView}>
            <Image
              source={require('./images/send-message.png')}
              style={styles.sendMessage}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareView>
    </View>
  );
}
