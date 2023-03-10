import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function AddTask() {
    return (
        <View style={styles.addTask}>
            <TouchableOpacity >
                <View style={styles.touch}>
                    <Text style={styles.colorHeading}>Add Task</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.paragraph}>Creatives for Branging</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    addTask: {
        width: 120,
        height: 120,
        borderWidth: 2,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 16,
        borderStyle:"dotted"
    },
    colorHeading: {
        textAlign: "center",
        fontWeight: "bold",
        borderWidth: 2,
        width: 80,
        borderRadius: 8,
        paddingHorizontal: 2,
        paddingVertical: 6,

    },
    paragraph: {
        textAlign: "center",
    },
    touch: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})