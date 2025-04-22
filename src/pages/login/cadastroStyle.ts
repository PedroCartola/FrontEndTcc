import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    conteiner:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0BD979',
        flexDirection:'column',
    },
        inputText:{
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderRadius: 4,
            color: 'gray',
            margin: 10
        },
    boxBotton:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cadastrar:{
        fontFamily: 'Montserrat',
        fontSize: 40,
        color: '#09B565',
        margin: 20,
        marginTop: 0,
    },
    boxBot:{
        flex: 6,
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 26,
        borderTopEndRadius: 26,
    },
    buttonCadastro:{
        width: '80%',
        height: 80,
        margin: 10,
    },
})