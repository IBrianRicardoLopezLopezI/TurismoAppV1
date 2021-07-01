import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Login from '../screens/Login'
import Registro from '../screens/Registro'
import Inicio from '../screens/Inicio'
import Colors from '../style/Colores'
import Principal from '../screens/Principal'

const Stack = createStackNavigator()

const globalScreenOptions = {
    headerStyle : { backgroundColor: Colors.Blue}
}

export default function Navigator(){

    return(
        <Stack.Navigator ScreenOptions = {globalScreenOptions} >
        <Stack.Screen name = 'Inicio' component = {Inicio} options = {{ title: 'Turisteando'}} />
        <Stack.Screen name = 'Login' component = {Login} options = {{ title: 'Login'}}/>
        <Stack.Screen name = 'Registro' component = {Registro} options = {{ title: 'Registro'}}/>
        <Stack.Screen name = 'Principal' component = {Principal} options = {{ title: 'Menu'}}/>
        </Stack.Navigator>
    )

}