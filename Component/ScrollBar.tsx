import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddTask from './AddTask'

export default function ScrollBar() {
  return (
    <View>
      <ScrollView style={styles.ScrollBar}>
        <AddTask/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    ScrollBar:{
        paddingHorizontal:8
    }
})