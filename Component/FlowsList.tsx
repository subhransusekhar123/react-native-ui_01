import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlowsList() {
    return (
        <View style={styles.flowList}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Flows list</Text>
                <Image
                    source={require("../Assets/downward-arrow.png")}
                    style={styles.flowListImage}
                />
            </View>

            <View style={styles.rightContainer}>
                <Text style={styles.seeAll}>
                    See all
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flowListImage: {
        width: 20,
        height: 20
    },
    flowList: {
        paddingHorizontal: 8,
        flexDirection:"row",
        justifyContent:"space-between"

    },
    header: {
        fontSize: 29,
        fontWeight: "500",
        color:"#000"
    },
    headerContainer: {
        flexDirection:"row",
        alignItems:"center",
        gap:16
    },
    rightContainer:{
        justifyContent:"flex-end"
    },
    seeAll:{
        color:"#626262",
        fontWeight:"bold"
    }
})