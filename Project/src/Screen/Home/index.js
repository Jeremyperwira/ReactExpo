import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
            <ScrollView style={{backgroundColor:'#f9f9f9'}}> 
             {/* Main Content */}
                <View > 
                    <View style={styles.banner}>
                        <View style={{marginHorizontal: -196, flexDirection:'row'}}>    
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner1.png')} />
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner2.png')} />
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner1.png')} />

                        </View>

                        <View style={{marginLeft:22 , marginTop:7 , flexDirection:'row'}}>
                            <View style={{width:20 ,height:8 , borderRadius:60 , backgroundColor:'#F2C94C', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                        </View>
                    </View>

                    

                </View>  

                <View style={styles.GlobalMargin}>
                    <View />
                </View>
             
             
             
             
             
             
             
             
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    GlobalMargin:{
        marginHorizontal:20,
        width:350,
        height:64,
        borderRadius: 6,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'white',
        shadowRadius:10,
        shadowOpacity:2,
        shadowColor:'red'
    },
    banner:{
        // marginHorizontal:22, ScrollView
        marginVertical: 17,
        height: 125,
        backgroundColor: 'white'

    },
    bannerImage:{
        // marginHorizontal:22, ScrollView
        marginTop:10,
        marginRight:4,
        // backgroundColor:'#F2C94C',
        height: 90,
        width: 210,
        borderRadius:8,
        shadowOpacity:8,
        shadowRadius:20,
        shadowColor:'black',
        borderColor:'#E0E0E0',
        borderWidth: 0.5


    }
    // buttomNav: {
    //     backgroundColor:'white',
    //     height: 65,
    //     elevation: 6,
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
        
        
    // },
    // icon:{
    //     backgroundColor:'white',
    //     // margin:20,
    //     flex:1,
    //     fontSize: 10,
    //     justifyContent: 'center',
    //     marginHorizontal: 10
    // },
    // icontxt:{
    //     fontSize:10,
    //     fontWeight:'500',
    //     textAlign: 'center'
    // }
})



