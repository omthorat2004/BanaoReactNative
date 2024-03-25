import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function Navbar({navigation}){
    return(
        <View style={styles.container}>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        borderBottomColor:'black',
        borderBottomWidth:'1px',
        width:'100%',
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:100,
        justifyContent:'flex-end',
        alignItems:'center',
        gap:10
    }
})