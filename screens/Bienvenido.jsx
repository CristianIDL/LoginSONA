import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

/**Antes se llamaba Inicio(), pero lo cambié a Bienvenido() para que no interfiera. */
export default function Bienvenido() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="text-white font-bold text-4xl text-center">
                Bienvenido
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/LOGO_BOB.png")}
                    style={{width: 350, height: 350}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-rose-900 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-stone-300">
                            Registrate
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-slate-400"> Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Ir directo al Inicio (prueba)</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('TabsPrincipal')}>
                        <Text className="font-semibold text-slate-400"> Principal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}