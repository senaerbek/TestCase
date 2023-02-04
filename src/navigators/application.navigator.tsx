import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigator} from './main.navigator';
import {SafeAreaView} from 'react-native';
import {SplashScreen} from '../screens/SplashScreen';

const Stack = createStackNavigator();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name="Splash" component={SplashScreen} />*/}
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
