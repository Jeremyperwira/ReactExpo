import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';


const Mail = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>

            {/* Main Content */}
            <View style={{backgroundColor:'white', flex: 1 , justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>Mail</Text>
            </View>


            
        </SafeAreaView>
        
    )
}

export default Mail