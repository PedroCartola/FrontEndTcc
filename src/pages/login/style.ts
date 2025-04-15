import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0BD979',
    },
    boxTop:{
        height: Dimensions.get('window').height/1.5,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
        inputText:{
            borderWidth: 1,
            borderRadius: 4,
            color: 'gray',
            margin:10
        },
    boxBotton:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        backgroundColor: 'white',  
        alignItems: 'center',
        justifyContent: 'center',
    },
})