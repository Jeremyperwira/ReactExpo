import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout(()=>{
            navigation.replace('MainApp')
        }, 2000)
    }

    )
    return (
        <SafeAreaView>
            <Text> Splash</Text>
            
        </SafeAreaView>
    )
}


export default Splash

const styles = StyleSheet.create({})
