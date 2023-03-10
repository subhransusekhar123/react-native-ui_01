import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './Component/Welcome'
import InputComp from './Component/InputComp'
import MultiTask from './Component/MultiTask'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <Welcome/>
      <InputComp/>
      <MultiTask/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})