import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';

export interface HeaderProps {
  left?: React.ReactNode;
  leftOnPress?: () => void;
  right?: React.ReactNode;
  rightOnPress?: () => void;
}
export function Header(props: HeaderProps) {
  const {left, right, leftOnPress, rightOnPress} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={typeof leftOnPress === 'function' ? 0 : 1}
        onPress={leftOnPress}
        style={styles.leftContainer}>
        {left}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={typeof right === 'function' ? 0 : 1}
        onPress={rightOnPress}
        style={styles.rightContainer}>
        {right}
      </TouchableOpacity>
    </View>
  );
}
