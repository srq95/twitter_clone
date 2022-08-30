import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NewTweet = ({navigation}) => {
  const [tweet, setTweet] = useState('');

  function sendTweet() {
    navigation.navigate('Tab');
  }



  return (
    <View style={styles.container}>
      <View style={styles.tweetButtonContainer}>
        <Text style={tweet.length > 250 ? styles.textRed : styles.textGrey}>
          Characters left: {280 - tweet.length}
        </Text>
        <TouchableOpacity style={styles.tweetBtn} onPress={() => sendTweet()}>
          <Text style={styles.tweetBtnText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetBoxContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={setTweet}
          value={tweet}
          placeholder="What's happening"
          placeholderTextColor="gray"
          multiline
          maxLength={280}
        />
      </View>
    </View>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  ml4: {
    marginLeft: 15,
  },
  textGrey: {
    color: 'gray',
  },
  textRed: {
    color: 'red',
  },
  tweetButtonContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tweetBtn: {
    backgroundColor: '#1d9bf1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  tweetBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tweetBoxContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    marginTop: 10,
    borderRadius: 21,
  },
  input: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    padding: 10,
  },
});
