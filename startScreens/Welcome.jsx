import {View, Text, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import Profile from '../Items/Profile'

const Welcome = () => {
    return (
        <View style={estilasos.dogView}>
            <Text style={estilasos.dogText}>Welcome to Komupet </Text>
            <Text style={estilasos.dogText}>A community for animals</Text>
        </View>
    )
}

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
    return(
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#0f5548', height: 70,  }} activeColor='#ffd589' inactiveColor='white'>
        <Tab.Screen name="Home" component={Welcome} options={{
      tabBarLabel: 'Home',
      tabBarIcon:({color, size}) => (
        <Ionicons name="home" color={color} size={size} style={{color: '#0d8404', fontSize: 20}} /> ),
    }}
   />
        <Tab.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile',
      tabBarIcon:({color, size}) => (
        <Ionicons name="paw" color={color} size={size} style={{color: '#0d8404', fontSize: 20,}} /> ),
    }}
   />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

  const estilasos = StyleSheet.create({
    dogText: {
        fontSize: 25,
        textAlign: 'center',
        alignContent: 'center',
    },
    dogView: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 70,
    },
})
export default Menu