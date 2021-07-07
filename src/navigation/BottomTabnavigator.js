import React from 'react'
import HomeScreen  from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import Profile from '../components/Profile';
import HomeStack from './HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

  
  function TabTwoNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  function TabThreeNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

    
  function TabFourNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

    
  function TabFiveNavigator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }



const Tab = createBottomTabNavigator();

function Navigation() {
    return (
      <Tab.Navigator   
        initialRouteName="TabOneNavigator"
        tabBarOptions={{
          activeTintColor: '#A9A9A9',
          style:{backgroundColor:'#141414'},
          
        }}
    
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TabTwoNavigator"
          component={TabTwoNavigator}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <Icon name="find" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TabThreeNavigator"
          component={TabThreeNavigator}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="pluscircleo" color={color} size={size} />
            ),
          }}
        />
          <Tab.Screen
          name="TabFourNavigator"
          component={TabFourNavigator}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="subscriptions" color={color} size={size} />
            ),
          }}
        />
          <Tab.Screen
          name="TabFiveNavigator"
          component={TabFiveNavigator}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="video-library" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default function BottomTabNavigator() {
    return (

        <Navigation />
    
    );
  }

 