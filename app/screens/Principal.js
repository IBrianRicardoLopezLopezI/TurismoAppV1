import React from 'react'
import {Text, View, Image, TextInput } from 'react-native'

export default function Principal({navigation}) {

    return(
        <View >
             <Image source = {(require ('../image/Login.png'))} />
             <View >
                     <Text>Bienvenidos</Text>
                     <Text >Bienvenidos a App De Turisteando</Text>
                 </View>
        </View>
    )
}