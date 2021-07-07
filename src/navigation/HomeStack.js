import React from 'react';
import { View, Text, Image, SafeAreaView,
    StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TabOneScreen from '../screens/TabOneScreen';
import Profile  from '../components/Profile';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const logo =  require('../../assets/src/images/logo.png');


function CustomHeader()  {
  return (

    <SafeAreaView style ={styles.container} >
    <View style={styles.subcontainer}>
    <Image resizeMode="contain"  style={styles.imagecontainer} source={logo} />
      <View style={{flexDirection: 'row', width: 150,  justifyContent: 'space-between'}}>
          <Feather name="cast" size={28} color="white" />
          <Icon name="bells" size={28} color="white" />
          <Icon name="search1" size={28} color="white" />
          <FontAwesome name="user-circle-o" size={28} color="white" />
        </View>
       </View> 
    </SafeAreaView>    
  );

}

const HomeStack = createStackNavigator();

function HomeStackComponent() {
  return (
    <HomeStack.Navigator 
        screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <HomeStack.Screen
        name="TabOneScreen"
        component={Profile}
        options = {{ headerTitle: 'Tab One Title' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#141414',
   
     },
     subcontainer:{
      flexDirection:'row',
      margin:10,
      padding:5,
      justifyContent:'space-between',
      alignItems:'center',
     },
     imagecontainer:{
        width:100, 
        height: 25,
     }
    })
   