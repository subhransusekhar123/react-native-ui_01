import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './Component/Welcome'
import InputComp from './Component/InputComp'
import MultiTask from './Component/MultiTask'
import FlowsList from './Component/FlowsList'
import Card from './Component/Card'

export default function App() {
  return (
    <SafeAreaView style={styles.paddingHorizontal}>
      <ScrollView>
      <Welcome/>
      <InputComp/>
      <MultiTask/>
      </ScrollView>
      <FlowsList/>
      <Card/>
      <Card/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  paddingHorizontal:{
    paddingHorizontal:15,
    backgroundColor:"#F6F5EE",
    paddingBottom:30
  }
})