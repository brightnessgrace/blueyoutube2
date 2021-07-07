import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import VideoScreen from '../screens/VideoScreen';
import BottomTabNavigator from './BottomTabnavigator';

export default function Navigation() {
  return(

    <RootNavigation />
  );
}


const Stack = createStackNavigator();


 function RootNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



