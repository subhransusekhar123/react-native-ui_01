import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.cardLeft}>
            <Text style={styles.cardLeftHeader}>Document Verification</Text>
            <Text style={styles.cardLeftMinutes}>3 min ago</Text>

            </View>
        <TouchableOpacity>
            <View style={styles.cardRight}>
               <Image
               source={require("../Assets/plus.png")}
               style={styles.cardImage}
               />
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        flexDirection:"row",
        alignItems:"center",
        height:100,
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderColor:"#8D8989"
             
    },
    cardLeft:{
        
    },
    cardRight:{
        width:30,
        height:30,
        borderRadius:30/2,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D3F36B",
    },
    cardImage:{
        width:20,
        height:20
    },
    cardLeftHeader:{
        fontSize:20,
        color:"#000000",
        fontWeight:"bold"
    },
    cardLeftMinutes:{
        color:"#626262",
        fontWeight:"600"
    }

})