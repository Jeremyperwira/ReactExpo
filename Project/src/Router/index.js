import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Splash, AuthIn , AuthUp , Home , Search , Profile, Mail } from '../Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () =>{
    return(
    <Stack.Navigator initialRouteName="Splash">    
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="Mail" component={Mail} options={{headerShown: false}}/>


        

    </Stack.Navigator>
    )
}
const MainApp =() =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Mail" component={Mail} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default Router