/** NATIVE */
import { View, Text } from 'react-native'
import React from 'react'
/** LIBRERÍAS */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** PÁGINAS O COMPONENTES */
import Bienvenido from './screens/Bienvenido';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TabsPrincipal from './screens/TabsPrincipal';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bienvenido'>
        <Stack.Screen 
          name="Bienvenido" 
          options={{headerShown: false}} 
          component={Bienvenido} 
        />
        <Stack.Screen 
          name="Login" 
          options={{headerShown: false}} 
          component={LoginScreen} 
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUpScreen} 
        />
        <Stack.Screen 
          name="TabsPrincipal" 
          component={TabsPrincipal} 
          options={{
            headerTitle: () => (
              <View>
                <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color:                   'white' }}>
                  SONA
                </Text>
              </View>
            ),
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E1E1E',
              
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}