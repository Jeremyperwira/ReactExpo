import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout(()=>{
            navigation.navigate('Home')
        }, 2000)
    }

    )
    return (
        <View>
            <Text> Splash</Text>
            
        </View>
    )
}


export default Splash

const styles = StyleSheet.create({})
