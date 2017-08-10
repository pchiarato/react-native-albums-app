// Index.ios.js place code in here for ios

// imports
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create component.
const App = () => (
    <View style={{ flex: 1 }}>
      <Header title={'Albums'} />
      <AlbumList />
    </View>
    );

AppRegistry.registerComponent('albums', () => App);

// const styles = StyleSheet.create({
//   textColor: {
//     color: 'red'
//   }
// });
