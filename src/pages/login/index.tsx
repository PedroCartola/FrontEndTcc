import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Button,
} from 'react-native';
import { style } from "./style";
import Logo from "../../assets/logo.png";

export default function Login(){
    return(
        <View style={style.conteiner}>
            <View style={style.boxTop}>
                <Text style={style.criarConta}>Criar conta</Text>
                <Text>Start your 30 day free trial. Cancel any time</Text>
                <View style={style.buttonLogin}>
                    <Button title='Google'/>
                    <Button title="Facebook" />
                </View>
                <Text>===================or===================</Text>
                <TextInput placeholder="E-mail" style={style.inputText} />
                <TextInput placeholder="Senha" style={style.inputText} />
                <TextInput placeholder="Confirme sua senha" style={style.inputText} />
                <Text>Esqueseu a senha?</Text>
                <Text>Check box</Text>
                <View style={style.boxBotton}>
                    <View style={style.buttonLogin}>
                        <Button title="Criar conta"></Button>
                    </View>
                </View>
                <Text>Já tem uma conta? <>Login in</></Text>
            </View>
                <Image
                source={Logo}
                style={style.image}
                />
        </View>
    )
}