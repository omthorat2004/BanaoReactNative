import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Card({url,owner}){
    return(
        <View style={styles.container} >
            <Image style={{width: '100%',
    height: '90%',borderRadius:12,
    resizeMode: 'stretch',}} source={{uri:url}} alt={owner}/>
            <Text>Owner:{owner}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:'25%',
        minHeight:300,
        maxHeight:400,
        justifyContent:'center',
        alignItems:'center'
    },

})