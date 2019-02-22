import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.welcome}>Iniciando o Mines!</Text>
        <Text styles={styles.instructions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
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
