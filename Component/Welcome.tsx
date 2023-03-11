import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.welcomeMainView}>
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.headingText}>Carolina Terner</Text>
            </View>
            <View style={styles.welcomeImageContainer}>
                <Image source={{
                    uri: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
                }}
                    style={styles.welcomeImage}
                />
                <View style={styles.imageText}>
                    <Text >2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        marginTop:50,
        flex:1,
        flexDirection:"row",
        paddingHorizontal:8,
        marginVertical:16,
        justifyContent:"space-between",
        alignItems:"center",
    },
    welcomeMainView: {},
    welcomeText: {
        fontSize:15,
        fontWeight:"500",
        color:"#24282C"
    },
    headingText: {
        fontSize:25,
        fontWeight:'bold',
        color:"#24282C"

    },
    welcomeImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        borderWidth: 2,
        borderColor: "#FFF",

    },
    imageText: {
        height: 25,
        width: 25,
        fontWeight:"bold",
        borderRadius: 25 / 2,
        borderColor: "#FFF",
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        bottom:2,
        left:-3,
        borderWidth:1,

    },
    welcomeImageContainer:{
        position:"relative",
    }
})