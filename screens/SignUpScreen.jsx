import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
        <TouchableOpacity onPress={()=> navigation.goBack()}
          className="bg-slate-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/BOBLeyendo.png')} 
                style={{width: 250, height: 250}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-black px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-200 ml-4">Nombre de usuario</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Usuario"
            />
            <Text className="text-gray-200 ml-4">Contraseña</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="Contraseña"
            />
            <Text className="text-gray-200 ml-4">Confirmar contraseña</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="Contraseña"
            />
            <Text className="text-gray-200 ml-4">Email</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              placeholder="Email"
            />
            <TouchableOpacity className="flex items-end">
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-slate-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Registrarme
                </Text>
             </TouchableOpacity>
            
          </View>
        
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-slate-400"> Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
