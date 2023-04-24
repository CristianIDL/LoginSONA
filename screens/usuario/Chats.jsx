/** REACT NATIVE */
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

// La const de Mensajes son la serie de objetos de las que nuestra app sacará la info para mostrar los contactos
const Mensajes = [
    {
        id: '0',
        userName: 'BOB',
        userImg: require('../../assets/logoBOB.png'),
        userDesc: 
            'Hola, soy BOB, tu Bot Operativo de Batiz',
    },
    {
        id: '1',
        userName: 'ChuchoGOD',
        userImg: require('../../assets/ChuchoGOD.jpg'),
        userDesc: 
            'El Jefe de la UDI a tu servicio chikibeibi',
    },
    {
        id: '2',
        userName: 'GODorina',
        userImg: require('../../assets/GODrina.jpg'),
        userDesc: 
            'Batiz...?',
    },
]

export default function Chats() {
  return (
    <View style={styles.chats}>
    <FlatList
        style={styles.container}
        data={Mensajes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', {userName: item.userName})}>
                <View style={styles.contactos}>
                    <Image style={styles.fotoCon} source={item.userImg}/>
                    <View style={styles.contenedorTexto} >
                        <Text style={styles.nombreCon}>{item.userName}</Text>
                        <Text style={styles.descripcionCon}>{item.userDesc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    chats: {
      backgroundColor: '#1E1E1E',
      height: '100%',
      borderTopColor: '#393939',
      borderBottomColor: '#393939',
      borderWidth: 1,
    },
    container: {
      marginTop:10, marginRight: 10, marginBottom: 10, marginLeft: 10,
    },
    contactos: {
      marginTop:2.5, marginBottom: 2.5,
      color: "#FFFFFF",
      flexDirection: 'row',
    },
    fotoCon: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginTop:10, marginRight: 10, marginBottom: 10, marginLeft: 10,
    },
    contenedorTexto: {
      flexDirection: 'column',
      textAlignVertical: 'middle'
    },
    nombreCon: {
      color: "#FFFFFF",
      marginTop:10, marginRight: 10, marginBottom: 0, marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 20,
    },
    descripcionCon: {
      marginTop:0, marginRight: 10, marginBottom: 10, marginLeft: 10,
      color: "#D1B7C3",
    },
  })
  