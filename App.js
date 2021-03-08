import React from 'react';
import { Platform, SafeAreaView, StyleSheet,StatusBar } from 'react-native';
import ImageScreen from './src/screens/ImageScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageScreen></ImageScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
