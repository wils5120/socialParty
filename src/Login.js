import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const user = false;
const imgBg = require('../assets/bgLogin.png')

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={imgBg}>
        <View style={styles.bottomTop}>
          <Ionicons name="logo-google" size={60} color="#fff" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={styles.bottomPos}>
          <Text style={styles.testParty}>Social Party</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomTop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomPos: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60
  },
  testParty: {
    color: '#e44d4d',
    fontSize: 56
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
