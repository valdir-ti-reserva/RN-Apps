import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      textoIniciar: 'INICIAR',
      ultimo: null,
    };

    //Variável do timer
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    if (this.timer !== null) {
      //Parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        textoIniciar: 'INICIAR',
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
          ultimo: null,
        });
      }, 100);
      this.setState({
        textoIniciar: 'PARAR',
      });
    }
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      textoIniciar: 'INICIAR',
    });
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={require('./src/assets/cronometro.png')}
            style={styles.img}
          />
          <Text style={styles.timer}> {this.state.numero.toFixed(1)}'' </Text>
          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
              <Text style={styles.botaoTexto}>{this.state.textoIniciar}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.botaoTexto}>LIMPAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.areaUltimo}>
            <Text style={styles.textoUltimo}>
              {this.state.ultimo > 0
                ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + "''s"
                : ''}
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  img: {},
  timer: {
    marginTop: -150,
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  botaoArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 10,
  },
  botaoTexto: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00aeef',
  },
  areaUltimo: {
    marginTop: 40,
  },
  textoUltimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default App;
