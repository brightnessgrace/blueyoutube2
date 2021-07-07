/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import  React , { useRef } from 'react';
 import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
 import Animated from 'react-native-reanimated';
 import BottomSheet from 'reanimated-bottom-sheet';
 import Icon from 'react-native-vector-icons/AntDesign'
 import Navigator from './src/screens/HomeScreen';
 import Navigation from './src/navigation';
import Videoscreen from './src/screens/VideoScreen/Videoscreen'
import { Modalize } from 'react-native-modalize';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export default function App() {
  return (
   <Navigator />
  );
}