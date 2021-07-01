import { StyleSheet } from "react-native";
import Colors from './Colores'

const Registe = StyleSheet.create({
    vista: {
        flexDirection: 'column',
        flex:1,
        padding:80,
        backgroundColor: Colors.White,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    vista2: {
        flex: 3
    },
    imagen: {
        flex:1,
        width: '100%',
        height: '40%'
    },
    text: {
        fontSize: 40,
        fontFamily: 'AllessaPersonalUse-4pRl',
        alignContent: 'center',
        textAlign: 'center'
    },
    parrafo: {
        fontFamily: 'BlackberryJamPersonalUse-rXOB',
        marginHorizontal: 30,
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        opacity: 1, 
    },
    vista3: {
        flexDirection: 'row',
        alignContent: 'center',
        marginHorizontal: 5,
        borderWidth: 5,
        marginTop: 20,
        paddingHorizontal: 20,
        borderColor: Colors.Green,
        borderRadius: 23,
        paddingVertical: 20
    },
    cuadro: {
        paddingHorizontal: 10
    },
    vista4: {
        
        flexDirection: 'row',
        alignContent: 'center',
        marginHorizontal: 5,
        borderWidth: 5,
        marginTop: 20,
        paddingHorizontal: 20,
        borderColor: Colors.Green,
        borderRadius: 23,
        paddingVertical: 20
    },
    cuadro1: {
        paddingHorizontal: 10
    },
    vista5: {
        flex:1,
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.Green,
        paddingVertical: 20,
        borderRadius: 20
    },
    text2: {
       color: Colors.White,
       textAlign: 'center'
    },
    vista6: {
        flex:1,
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.Green,
        paddingVertical: 20,
        borderRadius: 20
    },
    text3: {
        color: Colors.White,
        textAlign: 'center',
    },
})

export {Registe}