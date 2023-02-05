import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomTabBar} from '../components/CustomTabBar';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {HomeScreen} from '../screens/HomeScreen';
import {ConversationsScreen} from '../screens/ConversationsScreen';

export type RootStackParamList = {
  Home: undefined;
  Conversations: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={HomeScreen} />
      <Tab.Screen
        name="Messages"
        component={() => {
          return <React.Fragment />;
        }}
      />
      <Tab.Screen name="AddPhoto" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export const MainNavigator = memo(function ApplicationNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={TabComponent} />
      <MainStack.Screen name="Conversations" component={ConversationsScreen} />
    </MainStack.Navigator>
  );
});
