import React, {  Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    // Standard function
    maisUm() {
        this.setState({ numero : this.state.numero + 1 })
    }

    // Arrow function
    limpar = () => {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View style={Padrao.ex}>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()} // Standard function
                    onLongPress={this.limpar} // Arrow function
                    > 

                    <Text>Incrementar/Zerar</Text>

                </TouchableHighlight>
            </View>
        )
    }
}