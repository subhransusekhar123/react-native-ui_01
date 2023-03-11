import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddTask from './AddTask'
import ReviewCard from './ReviewCard'

export default function ScrollBar() {
  return (
    <View>
      <ScrollView style={styles.ScrollBar} horizontal={true}>
        <AddTask/>
        <ReviewCard/>
        <ReviewCard/>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    ScrollBar:{
        paddingHorizontal:8,
        marginBottom:36
    },
    ScrollBarContainer:{
    }
})