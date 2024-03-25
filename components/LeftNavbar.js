import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
export default function LeftNavbar(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:20,paddingTop:10}} >Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:'15%',
        flexGrow:0,
        textAlign:'center',
        display:'flex',
        alignItems:'center'
    }
})