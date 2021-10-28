/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';

import Navigation from './Navigation';
import SplashScreen from 'react-native-splash-screen'

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  },[])

  return (
      <Navigation />
  );
};

const styles = StyleSheet.create({
});

export default App;
