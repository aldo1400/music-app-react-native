/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  Alert,
  Image,
  View,
  ScrollView
} from 'react-native';

import ArtistBox from './ArtistBox';

import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  render() {
 
    
    const artist={
      image:'https://i.pinimg.com/564x/5d/fb/f9/5dfbf9f8258d2e8d3893de4f25c30e40.jpg',
      name:'David Brownie',
      likes:200,
      comments:140
    }
    return (
      <ScrollView style={styles.container}>
        {
          Array(500).fill(artist).map(()=>{
            return <ArtistBox artist={artist}/>
          })
        }
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:'column',
    backgroundColor: 'lightgray',
    paddingTop:50
  }
});
