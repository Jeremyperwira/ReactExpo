import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Splash, AuthIn , AuthUp , Home , Search , Profile, Mail , Setting} from '../Screen';
import { FontAwesome5 } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawwer = createDrawerNavigator();

const Router = () =>{
    return(
    <Stack.Navigator initialRouteName="Splash">    
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarLabel : 'Homse',
                    tabBarIcon : ({ color }) => (
                         <FontAwesome5 name="home" color={"color"} size={20}/>
                     )
                    }}/>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="Mail" component={Mail} options={{headerShown: false}}/>

            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>



        

    </Stack.Navigator>
    )
}
// const Drawwer =() =>{
//     return(
        
//     )
// }
const MainApp =() =>{
    return(
        <Tab.Navigator> 
            <Tab.Screen name="Home" 
                        component={Home} 
                        options={{
                        headerShown: true,
                        tabBarLabel : 'Home',
                        tabBarIcon : ({ color }) => (
                            <FontAwesome5 name="home" color={color} size={20}/>
                        )
                        }}/>
            <Tab.Screen name="Search" 
                        component={Search}
                        options={{
                        headerShown: true,
                        tabBarLabel : 'Cari',
                        tabBarIcon : ({ color }) => (
                            <FontAwesome5 name="truck" color={color} size={20}/>
                        )
                        }}/>
            <Tab.Screen name="Mail" 
                        component={Mail} 
                        options={{
                        headerShown: true,
                        tabBarLabel : 'Pesan',
                        tabBarIcon : ({ color }) => (
                            <FontAwesome5 name="inbox" color={color} size={20}/>
                        )
                        }}/> 
            <Tab.Screen name="Profile" 
                        component={Profile} 
                        options={{
                        headerShown: true,
                        tabBarLabel : 'Akun',
                        tabBarIcon : ({ color }) => (
                            <FontAwesome5 name="user-alt" color={color} size={20} style="solid"/>
                        )
                        }}/>
        </Tab.Navigator>
    )
}
export default Router