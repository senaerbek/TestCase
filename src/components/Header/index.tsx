import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

export interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
export function Header(props: HeaderProps) {
  const {left, right} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>{left}</View>
      <View style={styles.rightContainer}>{right}</View>
    </View>
  );
}
