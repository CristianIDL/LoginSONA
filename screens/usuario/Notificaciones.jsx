/** REACT NATIVE */
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Notificaciones() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Notificaciones</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      borderTopColor: '#393939',
      borderBottomColor: '#393939',
      borderWidth: 1,
    },
    texto: {
      color: '#FFF',
    },
  });
