import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>
        <FontAwesome name='home' size={20} />
        Home
      </Text>
      
      <Button title="New Tweet" onPress={() => navigation.navigate('New Tweet')}/>
      <Button title="Tweet Screen" onPress={() => navigation.navigate('Tweet Screen')}/>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({});