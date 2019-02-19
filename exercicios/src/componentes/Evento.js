import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    // função 'alterarTexto' passando 'texto' como parâmetro
    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View style={{marginVertical: 30}}>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}></TextInput>
            </View>
        )
    }
}