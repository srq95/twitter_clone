import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from './Home';
import NewTweet from './NewTweet';
import TweetScreen from './TweetScreen';
import Profile from './Profile';
import SettingsScreen from './settings';
import Search from './Search';
import Notification from './Notification';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="New Tweet" component={NewTweet} />
      <Stack.Screen name="Tweet Screen" component={TweetScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}