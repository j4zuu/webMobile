import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {SafeAreaView, Image} from 'react-native';
import GlobalStyles from './utils/GlobalStyles';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Image
        style={GlobalStyles.mainImage}
        source={{uri: 'https://images.pexels.com/photos/5004611/pexels-photo-5004611.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}
      />
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
