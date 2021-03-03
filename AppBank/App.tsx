import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.logo}>AppBank</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#612f74',
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
});

export default App;
