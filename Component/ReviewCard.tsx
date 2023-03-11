import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ReviewCard() {
  return (
    <View>
      <View style={styles.reviewCardContainer}>
          <Text style={styles.reviewCardHeader}>Review</Text>

        <View>
        <Text style={styles.reviewCardPara}>Verification</Text>
        <Text style={styles.reviewCardPara}>process with team</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  reviewCardContainer: {
    width: 190,
    height: 140,
    borderRadius: 16,
    justifyContent: "space-evenly",
    paddingLeft: 12,
    marginLeft:10,
    backgroundColor:"#FFF",


  },
  reviewCardHeader: {
    textAlign: "center",
    fontWeight: "bold",
    width: 80,
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 6,
    backgroundColor:"#D7D7D7",
    color:"#24282C"
  },
  reviewCardPara: {
    color:"#24282C"
  },
  reviewCardHeaderContainer:{

  }

})