import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../Home';
import Login from '../Login';



const AppNavigator = createDrawerNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}, {initialRouteName: 'Login'})

export default createAppContainer(AppNavigator)