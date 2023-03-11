import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollBar from './ScrollBar'

export default function MultiTask() {
    return (
        <View>
            <View style={styles.multiTask}>
                <Text style={styles.multiHeader}>Task-based</Text>
                <Text style={styles.multiHeader}>explanation process</Text>
            </View>
            <ScrollBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    multiTask:{
        paddingHorizontal:8,
        marginVertical:26
    },
    multiHeader: {
        fontSize:24,
        fontWeight:"bold",
        color:"#24282C"

    },
})