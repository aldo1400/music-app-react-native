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
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  render() {
    const image='https://i.pinimg.com/564x/5d/fb/f9/5dfbf9f8258d2e8d3893de4f25c30e40.jpg';
    const name='David Bowie';
    const likes=200;
    const comments=140;

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image  style={styles.image} source={{uri:image}}/>
          <View style={styles.info}>
          
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
          
          <View style={styles.iconContainer}>
          <Icon name="ios-heart" size={30} color="black" />
          <Text style={styles.count}>{likes}</Text>
         </View>
         
         <View style={styles.iconContainer}>
          <Icon name="ios-chatbubbles" size={30} color="black" />
          <Text>{comments}</Text>
          </View>

          </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:'column',
    backgroundColor: 'lightgray',
    paddingTop:50
  },
  image:{
    width:150,
    height:150
  },
  artistBox:{
    backgroundColor:'white',
    flexDirection:'row'
  },
  info:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  name:{
    fontSize:20,
    marginTop:10,
    color:'#333'
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:40,
    marginTop:15
  },
  iconContainer:{
    flex:1,
    alignItems:'center'
  },
  count:{
    color:'gray'
  }

});
