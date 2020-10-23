import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>

            {/* Main Content */}
            <View style={{backgroundColor:'white', flex: 1 , justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>Profile</Text>
            </View>


            
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})
