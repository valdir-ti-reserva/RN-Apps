import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
        >
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
    width: 150,
  },
  box2: {
    height: 250,
    backgroundColor: 'gray',
    width: 150,
  },
  box3: {
    height: 250,
    backgroundColor: 'blue',
    width: 150,
  },
  box4: {
    height: 250,
    backgroundColor: 'red',
    width: 150,
  },
});

export default App;
