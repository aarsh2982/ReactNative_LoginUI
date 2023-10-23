import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();
    return (


        <View className="bg-white h-full w-full">
            <StatusBar style='light' />
            <Image className="h-full w-full absolute" style={{ tintColor: '#fccb06' }} source={require('../assets/Images/background.png')} />


            {/* Lights */}
            <View className="flex-row justify-around w-full absolute">
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" style={{ tintColor: '#274690' }} source={require('../assets/Images/light.png')} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[180] w-[65]" style={{ tintColor: '#222e50' }} source={require('../assets/Images/light.png')} />
            </View>

            {/* Title And Form */}

            <View className="h-full w-full flex justify-around pt-40 pb-10">

                <View className="flex items-center">
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-4xl mt-9">Login</Animated.Text>
                </View>

                {/* Form */}
                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Enter Email' placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                        <TextInput placeholder='Enter Password' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                        <TouchableOpacity className="w-full p-3 rounded-2xl mb-3" style={{ backgroundColor: '#fccb06' }}>
                            <Text className="text-center text-xl font-bold text-white">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('SignUp')} >
                            <Text className="text-yellow-400 font-bold">SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>



                </View>

            </View>

        </View>
    )
}

export default LoginScreen