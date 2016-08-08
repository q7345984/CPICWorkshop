/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

import Banner from './components/Banner.js'
import DecoratedInput from './components/DecoratedInput.js'

let {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  backgroundImage: { width, height }
});
function App() {
  return(
    <Image style={styles.backgroundImage} source={require('../resources/loginBg.png') }>
      <StatusBar barStyle='light-content' />
      <ScrollView style={styles.container}>
        <Banner title={"用户登录"} />
        <DecoratedInput style={{marginBottom:20}} placeholder={"输入一个啥来着"} />
        <DecoratedInput style={{marginBottom:20}} placeholder={"输入一个啥来着"} />
      </ScrollView>
    </Image>
  )
}

export default App
