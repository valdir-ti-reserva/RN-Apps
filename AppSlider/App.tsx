import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 24,
      status: true,
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

          <Text style={styles.title}>App Switch</Text>
          <Switch
            value={this.state.status}
            onValueChange={(value) => this.setState({status: value})}
            thumbColor="#fe0000"
          />

          <Text style={styles.resp}>
            Valor Switch: {this.state.status ? 'Ativo' : 'Inativo'}
          </Text>
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
