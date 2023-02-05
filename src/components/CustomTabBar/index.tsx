import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {styles} from './style';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/src/types';

export function CustomTabBar({
  state,
  navigation,
}: {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const navigateToConversationsScreen = () => {
          navigation.navigate('Conversations');
        };

        return (
          <View style={styles.tabBarView}>
            {route.name === 'Dashboard' ? (
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}>
                <View>
                  <Image
                    source={require('./images/home.png')}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            ) : route.name === 'Messages' ? (
              <TouchableOpacity
                onPress={navigateToConversationsScreen}
                style={styles.buttonContainer}>
                <View>
                  <Image
                    source={require('./images/messages.png')}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            ) : route.name === 'AddPhoto' ? (
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}>
                <View>
                  <Image
                    source={require('./images/add-photo.png')}
                    style={styles.photoIcon}
                  />
                </View>
              </TouchableOpacity>
            ) : route.name === 'Profile' ? (
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}>
                <View>
                  <Image
                    source={require('./images/profile.png')}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            ) : route.name === 'Favorites' ? (
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonContainer}>
                <View>
                  <Image
                    source={require('./images/favorites.png')}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}
