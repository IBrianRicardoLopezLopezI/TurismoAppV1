import React, { useState } from 'react'
import {Text, View, Image, TextInput } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../style/Colores'
import {Logeo} from '../style/StyleLogo'
import Firebase from '../database/Firebase'
import Principal from './Principal'

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Login = async () => {
        if(email === '' || password === ''){
            alert('Favor de Ingresar todos los campos')
        }else {
            await Firebase.auth().signInWithEmailAndPassword(email.trim(), password)
            alert('Bienvenidos')
            navigation.navigate('Principal')
        }
    }


       return(
           <View style={Logeo.vista}>
                <Image source = {(require ('../image/Login.png'))} style={Logeo.imagen}/>
                <View style={Logeo.vista2}>
                        <Text style={Logeo.text}>Login</Text>
                        <Text style={Logeo.parrafo}>Bienvenidos a App De Turisteando</Text>
                    <View style={Logeo.vista3}>
                        <Ionicons name="mail" color={Colors.Black} size={24}/>
                        <TextInput style={Logeo.cuadro} placeholder = 'Email' type = 'email'
                        onChangeText = {(text) => setEmail(text)}/>
                    </View>
                    <View style={Logeo.vista4}>
                        <Ionicons name= "key" color={Colors.Black} size={24}/>
                        <TextInput secureTextEntry style={Logeo.cuadro1} secureTextEntry placeholder = 'Password'
                        onChangeText = {(text) => setPassword(text)} />
                    </View>
                    <View style={Logeo.vista5}>
                        <Text onPress = {() => Login()} style={Logeo.text2}>Iniciar Session</Text>
                    </View>
                    <View style={Logeo.vista6}>
                        <Text onPress = {() => navigation.navigate('Registro')} style={Logeo.text3}> Crear Nuevo Usuario</Text>
                    </View>
                </View>
           </View>
       )
}