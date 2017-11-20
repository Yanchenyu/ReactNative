import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import LoginScreen from './src/views/login';

const StackRouter = StackNavigator({
  LoginStack: {
    screen: LoginScreen,
    navigationOptions: {
      header: null  
    }
  }
})

export default StackRouter;
