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
import {StyleSheet, ScrollView, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box4} />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    height: 250,
    backgroundColor: 'green',
  },
  box2: {
    height: 250,
    backgroundColor: 'gray',
  },
  box3: {
    height: 250,
    backgroundColor: 'blue',
  },
  box4: {
    height: 250,
    backgroundColor: 'red',
  },
});

export default App;
