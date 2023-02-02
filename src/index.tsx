import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {ApplicationNavigator} from './navigators/application.navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function AppComponent() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export function App() {
  return <AppComponent />;
}
