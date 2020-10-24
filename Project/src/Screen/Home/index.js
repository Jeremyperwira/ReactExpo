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
                <View> 
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

                    <View style={styles.launcher}>
                        <View />
                    </View>

                <View style={styles.content}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                         marginTop:15,
                         marginLeft:20,
                        //  fontFamily:'Poppins',
                         }}>Hai Jeremy, lagi perlu di daerah mana?</Text>
                    <View style={{marginLeft:20,flexDirection:'row'}}>
                    <Image style={styles.contentImage}source={require('../../Assets/Image/Jakarta.png')} />
                    <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah2.png')} />
                    <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah3.png')} />
                    <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah4.png')} />
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                         marginTop:15,
                         marginLeft:20,
                        //  fontFamily:'Poppins',
                         }}>Pilih kendaraan sesuai kebutuhan kamu</Text>

                </View>


                    
             
             
             
             
             
             
             
             
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    launcher:{
        marginHorizontal:20,
        width:350,
        height:64,
        borderRadius: 6,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
        shadowRadius:10,
        shadowOpacity:0.10,
        shadowColor:'red',
    },
    banner:{

        marginBottom: 17,
        height: 125,
        backgroundColor: 'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
        borderTopWidth: 0,

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
    },
    contentImage:{
        marginTop:5,
        marginRight:4,
        height: 104,
        width: 104,
        shadowOpacity:8,
        shadowRadius:20,
        shadowColor:'black',
        borderColor:'#E0E0E0',
    },
    content:{
        marginTop: 17,
        height: 160,
        backgroundColor: 'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,

    },
    
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



