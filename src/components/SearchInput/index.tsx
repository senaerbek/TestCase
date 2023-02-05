import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {styles} from './style';

interface SearchInputProps {
  onChangeText: (text: string) => void;
}
export function SearchInput(props: SearchInputProps) {
  const {onChangeText} = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Image
          style={styles.searchIcon}
          source={require('./images/search.png')}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Search for contacts"
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
