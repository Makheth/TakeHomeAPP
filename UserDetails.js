
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UserDetails(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    fontSize: 20,
    marginBottom: '20px'
  },
  label: {
    fontWeight: 500
  },
  value: {
    color: '#666'
  }
})