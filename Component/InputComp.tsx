import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function InputComp() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputCompContainer}>
        <Image 
        source={require('../Assets/search.png')}
        style={styles.inputCompImg}
        />
      <TextInput
        style={styles.input}
        placeholder="Try to find..."
        keyboardType="default"
        placeholderTextColor="#000"
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:8,
        marginVertical:20
    },
    inputCompContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:30,
        backgroundColor:"#FFF",
        color:"#264348"
    },
    input:{
        color:"#264348",
    },
    inputCompImg:{
        height:20,
        width:20,
        marginRight:8,
        marginLeft:25
    }
})