import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Fields from './src/components/Fields'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        
        <Fields />
        <Fields opened />
        <Fields opened nearMines={1} />
        <Fields opened nearMines={2} />
        <Fields opened nearMines={3} />
        <Fields opened nearMines={6} />
        <Fields mined />
        <Fields opened mined />
        <Fields opened mined exploded />
        <Fields flagged />
        <Fields opened flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
