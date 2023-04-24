/** REACT NATIVE */
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Seguidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seguidos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      color: '#FFF',
    },
  });
