import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import Pessoa from './src/components/Pessoa';

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
        {
          id: 4,
          name: 'Lila 2',
          idade: 32,
          email: 'lila@mail.com',
        },
        {
          id: 5,
          name: 'Julia 2',
          idade: 32,
          email: 'lila@mail.com',
        },
        {
          id: 6,
          name: 'Valdir 2',
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

export default App;
