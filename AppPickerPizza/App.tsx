import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Calabresa', valor: 35},
        {key: 2, nome: 'Mussarela', valor: 24},
        {key: 3, nome: 'Baiana', valor: 32},
        {key: 4, nome: 'Portuguesa', valor: 45},
      ],
    };
  }

  render() {
    const pizzasItem = this.state.pizzas.map((v, k) => (
      <Picker.Item label={v.nome} value={k} key={k} />
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.title}>MENU PIZZA</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({pizza: itemValue})
          }
          style={styles.select}>
          {pizzasItem}
        </Picker>

        <Text style={styles.sabor}>
          Você selecionou o sabor: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.valor}>
          Valor R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ee7ab0',
  },
  select: {
    width: 200,
    height: 40,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    color: '#001aff',
    fontStyle: 'italic',
  },
  sabor: {
    marginTop: 50,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fe0',
  },
  valor: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#fe0',
  },
});
