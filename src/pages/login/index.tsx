import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import { style } from "./style";
import Logo from "../../assets/logo.png";

export default function Login(){
    return(
        <View style={style.conteiner}>
            <View style={style.boxTop}>
                <Text>Bem Vindo</Text>
                <TextInput placeholder="E-mail" style={style.inputText}/>
                <TextInput placeholder="Senha" style={style.inputText}/>
                <TextInput placeholder="Confirme sua senha" style={style.inputText}/>
            </View>
            <View style={style.boxBotton}>
                <Text>button</Text>
            </View>
        </View>
    )
}