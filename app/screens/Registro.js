import React, { useState } from 'react'
import {Text, View, Image, TextInput } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../style/Colores'
import {Registe} from '../style/StyleRegistro'
import Firebase from '../database/Firebase'


export default function Registro({navigation}) {

    const [Username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Register = async () =>{
        if(Username === '' || email === '' || password === ''){
            alert('Favor de Ingresas Todos los Campos')
        }else {
            await Firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
            alert('Se a Creado el Usuario Correctamente')
            navigation.navigate('Login')
        }
    }
       return(
           <View style={Registe.vista}>
                <Image source = {(require ('../image/register.png'))} style={Registe.imagen}/>
                <View style={Registe.vista2}>
                        <Text style={Registe.text}>Registro</Text>
                    <View style={Registe.vista3}>
                        <Ionicons name="md-person-add" color={Colors.Black} size={24}/>
                        <TextInput style={Registe.cuadro} placeholder='UserName' type = 'text'
                         value = {Username} onChangeText = {(text) => setUserName(text)} />
                    </View>    
                    <View style={Registe.vista3}>
                        <Ionicons name="mail" color={Colors.Black} size={24}/>
                        <TextInput style={Registe.cuadro} placeholder='Email' type = 'email'
                         value = {email} onChangeText = {(text) => setEmail(text)}/>
                    </View>
                    <View style={Registe.vista4}>
                        <Ionicons name= "key" color={Colors.Black} size={24}/>
                        <TextInput style={Registe.cuadro1} placeholder='Password' secureTextEntry={true} type = 'password'
                         value = {password} onChangeText = {(text) => setPassword(text)} />
                    </View>
                    <View style={Registe.vista5}>
                        <Text onPress = {() => Register()} style={Registe.text2}>Registrarse</Text>
                    </View>
                    <View style={Registe.vista6}>
                        <Text onPress = {() => navigation.navigate('Login')} style={Registe.text3}>Ya Cuento con una Cuenta</Text>
                    </View>
                </View>
           </View>
       )
    }
