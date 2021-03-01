import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          name: 'Valdir',
          idade: 40,
          email: 'val@mail.com',
        },
        {
          id: 2,
          name: 'Julia',
          idade: 40,
          email: 'julia@mail.com',
        },
        {
          id: 3,
          name: 'Lila',
          idade: 32,
          email: 'lila@mail.com',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            data={this.state.feed}
            renderItem={({item}) => <Pessoa data={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Pessoa extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.data.id} - {this.props.data.name} -{' '}
          {this.props.data.idade} - {this.props.data.email}
        </Text>
      </View>
    );
  }
}

export default App;
