import { createStackNavigator } from  'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoadingScreen from './LoadingScreen';
import Profile from '../components/Profile';
import Navigation from '../navigation';


const screens = {
  

    Home: {
       screen: LoadingScreen,
       navigationOptions: {
        headerShown: false,
       },
    },

    Profile:{

        screen: Navigation,
        navigationOptions: {
       
        headerShown: false,
             
          },
    }
}

const HomeScreen = createStackNavigator(screens);

export default createAppContainer(HomeScreen);