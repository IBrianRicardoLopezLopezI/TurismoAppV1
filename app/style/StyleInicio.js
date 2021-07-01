import { StyleSheet } from "react-native";
import Colors from './Colores'
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen')

const Primera = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Contenedor: {
        paddingBottom: 100
    },
    vista: {
        width,
        alignItems: 'center',
        padding: 20
    },
    vista1: {
        flex: 0.6,
        justifyContent: 'center'
    },

    imaganes: {
        flex:1,
       
        width: width /2,
        height: width /2,
        resizeMode: 'center'
    },
    vista2: {
        flex: 0.3
    },

    texttitulo: {
        fontWeight: '800',
        fontSize: 30,
        marginBottom: 10,
        color: Colors.White,
        alignItems: 'center',
        fontFamily: 'BlackberryJamPersonalUse-rXOB'
    },

    textdescript: {
        fontWeight: '300',
        fontSize: 25,
        color: Colors.White,
        alignItems: 'center',
        fontFamily: 'LemonJellyPersonalUse-dEqR'
    },

    scroll: {
    
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        
       
    },
    login: {
        marginHorizontal: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.Fuchsia,
        paddingVertical: 10,
        borderRadius: 25,
        color: Colors.White,
        textAlign: 'center'
    },
    registro: {
        marginHorizontal: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.Fuchsia,
        paddingVertical: 10,
        borderRadius: 25,
        color: Colors.White,
        textAlign: 'center'
    }


})

export { Primera }