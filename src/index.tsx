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
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import BreedsComponent from './components/BreedsComponent';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={[styles.container]}>
            <Text>Hello</Text>
          </View>
          <BreedsComponent />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
