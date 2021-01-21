import React from 'react'
import {StyleSheet, FlatList, Text, View, Button} from 'react-native'

import {height} from '../dimensions'

export default ({puntos, handleOk}) => {
    return (
        <>
        {
            puntos.length === 0 ? 
            <View style={styles.noPoints}>
                <Text>No hay puntos en el mapa</Text>
            </View> : 
            <>
            <View style={styles.list}>
                <FlatList  keyExtractor={item=>item} 
                data={puntos.map(x=>x.nombre)} renderItem={({item})=>
                    <View style={styles.item}>
                        <Text>{item}</Text>
                    </View>}/>                
            </View>
        </>
        }
            <View style={styles.ok}>
                <Button title="Ok" onPress={handleOk}/>
            </View>
    </>
    )
}

const styles = StyleSheet.create({
    noPoints: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ok: {
        margin: 8,
        paddingBottom: 10
    },
    list: { 
        height: height - 500,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        height: 40,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
