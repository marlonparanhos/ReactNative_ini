import React from 'react'
import { Text, View } from 'react-native'
import Padrao from '../estilo/Padrao'

// O 'export default' permite acessar a função em outros arquivos

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

// Arrow Function (mais usual)
// o 'return' fica implícito (se tirar o corpo da função,ie., {})
// export default props =>
//     <View>
//         <Text>Arrow 1: {props.texto}</Text>
//         <Text>Arrow 2: {props.texto}</Text>
//     </View>

// o style pode tb ser chamado como array, ie., style={[Padrao.ex]}.
// Assim pode-se chamar vários estilos de uma só vez
export default props => <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>