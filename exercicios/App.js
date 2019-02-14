import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './src/componentes/Simples'
import Parimpar from './src/componentes/Parimpar'

// entre { } pq foi exportada sem default (sem padrão)
import { Inverter, MegaSena } from './src/componentes/Multi'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.f20}>App!</Text> */}
                <Simples texto='Flexível!!!'/>
                <Parimpar numero={33} />
                <Inverter texto='React Nativo'/>
                <MegaSena numeros={6}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    f20: {
        fontSize: 40
    }
})