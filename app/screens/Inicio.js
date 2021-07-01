import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {Text, View, Animated, FlatList, Image, ImageEditor, StyleSheet, Dimensions } from 'react-native'
import {Primera} from '../style/StyleInicio'
import {DATA, bgs} from '../style/DataInicio'
import Colors from '../style/Colores'


const {width, height} = Dimensions.get('screen')

const Indicator = ({scrollX}) => {
    return <View style = {Primera.scroll}>
        {DATA.map((_, i) => {
            const inputRange = [(i - i ) * width, i * width, (i + 1) * width]
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamps'
            })
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 1, 0.6],
                extrapolate: 'clamps'
            })
            return <Animated.View 
            key = { `Indicator - ${i}`}
            style = {{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: Colors.White,
                margin: 10,
                opacity,
                transform:[
                  {
                    scale
                  }
                ]
            }}
            />
        })}
    </View>
}

const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bgs) => bgs)
    })
    return(
        <Animated.View
        style = {[
            StyleSheet.absoluteFillObject,
            {
                backgroundColor
            }
        ]} 
        />
    )
}

const Square = ({scrollX}) => {
    const z = Animated.modulo(
        Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ),
        1
    )
    const rotate = z.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['35deg', '0deg','35deg'],

    })
    return <Animated.View
        style = {{
            width,
            height: height,
            backgroundColor: Colors.White,
            borderRadius: 86,
            position: 'absolute',
            top: -height * 0.55,
            left: -height * 0.1000,
            transform: [
                {
                rotate
                }
            ]
        }}
    />
}


export default function Inicio({navigation}) {
   
    const scrollX = React.useRef(new Animated.Value(0)).current

       return (
           <View style = {Primera.container} >
              <StatusBar hidden />
              <Backdrop scrollX = {scrollX} />
              <Square scrollX = {scrollX}/>
              <Animated.FlatList
              data = {DATA}
              keyExtractor = { item => item.key}
              horizontal
              scrollEventThrottle = {30}
              onScroll = {Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
              contentContainerStyle = {Primera.Contenedor}
              showsHorizontalScrollIndicator = {false}
              pagingEnabled
              renderItem = {({item}) => {
                  return (
                      <View style = {Primera.vista}>
                        <View style = {Primera.vista1}>
                            <Image source = {{uri: item.image}} style = {Primera.imaganes}/>
                        </View>
                        <View style = {Primera.vista2}>
                            <Text style = {Primera.texttitulo}> {item.title} </Text>
                            <Text style = {Primera.textdescript}> {item.descripcion} </Text>
                            <Text onPress = {() => navigation.navigate('Login')} style = {Primera.login}>Login</Text>
                            <Text onPress = {() => navigation.navigate('Registro')} style = {Primera.registro}>Registro</Text>
                        </View>
                      </View>
                  )
              }}
              />
              <Indicator scrollX = {scrollX }/>
           </View>
       )
    }
