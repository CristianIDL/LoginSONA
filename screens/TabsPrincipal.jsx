/** REACT NATIVE */
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
/** LIBRERÍAS */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
/** PÁGINAS O COMPONENTES */
import Chats from './usuario/Chats';
import Guardados from './usuario/Guardados';
import Inicio from './usuario/Inicio';
import Notificaciones from './usuario/Notificaciones';
import Perfil from './usuario/Perfil';
import Seguidos from './usuario/Seguidos';

const Tab = createMaterialBottomTabNavigator();

// Agregamos las Themes para que no salga un círculo feo alrededor de la Tab seleccionada (Es la solución que encontré)
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: '#1E1E1E',
  },
};


export default function TabsPrincipal() {
  return (
    <PaperProvider theme={theme}> 
      <Tab.Navigator
        initialRouteName= "Inicio"
        activeColor= "#ffffff"
        inactiveColor= '#b6b6b6'
        labeled = {false}
        barStyle= {{ 
          backgroundColor: '#1E1E1E' ,
      }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons 
                name="home-outline" 
                color={color} 
                size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Chats" 
          component={Chats} 
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons 
                name="email-outline" 
                color={color} 
                size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Seguidos" 
          component={Seguidos} 
          options={{
            tabBarLabel: 'Guardados',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons 
                name="account-group-outline" 
                color={color} 
                size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Notificaciones" 
          component={Notificaciones} 
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons 
                name="bell-outline" 
                color={color} 
                size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Guardados" 
          component={Guardados} 
          options={{
            tabBarLabel: 'Guardados',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons 
                name="bookmark-outline" 
                color={color} 
                size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#332E34',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      color: '#FFF',
    },
  });