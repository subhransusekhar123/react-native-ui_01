import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function AddTask() {
    return (
        <View>
        <View style={styles.addTask}>
            <TouchableOpacity >
                <View>
                    <Text style={styles.colorHeading}>Add Task</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.paragraph}>Creatives for Branging</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addTask: {
        height:140,
        width:130,
        borderWidth: 2,
        justifyContent: "space-evenly",
        borderRadius: 16,
        borderStyle:"dotted",
        paddingHorizontal:10,
        borderColor:"#D7D7D7"
    },
    colorHeading: {
        textAlign: "center",
        fontWeight: "bold",
        width: 80,
        borderRadius: 8,
        paddingHorizontal: 3,
        paddingVertical: 6,
        backgroundColor:"#D3F36B",
        color:"#24282C"

    },
    paragraph: {
        textAlign: "left",
        color:"#24282C"
    },
})