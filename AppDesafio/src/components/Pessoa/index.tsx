import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>E-mail: {this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 150,
    marginBottom: 10,
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default Pessoa;
