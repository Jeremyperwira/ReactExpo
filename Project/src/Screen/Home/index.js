import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';


const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>

            {/* Main Content */}
            <View style={{backgroundColor:'white', flex: 1 , justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>Home</Text>
            </View>


            
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    buttomNav: {
        backgroundColor:'white',
        height: 65,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        
    },
    icon:{
        backgroundColor:'white',
        // margin:20,
        flex:1,
        fontSize: 10,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    icontxt:{
        fontSize:10,
        fontWeight:'500',
        textAlign: 'center'
    }
})



