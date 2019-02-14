import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num){
    const x = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{x}</Text>
}

export default props =>
    <View>
        {
            // props.numero % 2 == 0
            // ? <Text style={Padrao.ex}>Par</Text>
            // : <Text style={Padrao.ex}>{props.numero} = Ímpar</Text>

            parOuImpar(props.numero)
        }
    </View>