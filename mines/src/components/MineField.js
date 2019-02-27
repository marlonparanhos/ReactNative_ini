import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Fields'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => { // armazena todos os fields de uma linha
            // transforma um array de objetos em um array de elementos jsx
            return <Field {...field} key={c} // a ausência do key não gera erro, mas é um boa prática usar (é tipo ID)
                onOpen={() => props.onOpenField(r, c)} // abre mina
                onSelect={() =>props.onSelectField(r, c)}/> // sinaliza a mina (flag)
        })
        
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })

    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})