/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import store from './store';

import BreedsComponent from './components/BreedsComponent';
import DogComponent from './components/DogComponent';
import About from './components/About';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: BreedsComponent,
    },
    Dog: DogComponent,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Home: StackNavigator,
    About: About,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <AppContainer />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
