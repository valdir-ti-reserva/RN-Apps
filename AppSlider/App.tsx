import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 24,
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>App Slider</Text>

          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valueSelected) =>
              this.setState({valor: valueSelected})
            }
            value={this.state.valor}
            minimumTrackTintColor="#fe0eee"
            maximumTrackTintColor="#e33e32"
          />

          <Text style={styles.resp}>{this.state.valor.toFixed(2)}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  resp: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
