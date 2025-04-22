import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Button,
} from 'react-native';
import { style } from "./cadastroStyle";
import CheckBox from "./index.js";

export default function Login(){
    return(
        //contem a todos
        <View style={style.conteiner}>
            <View style={{flex: 2}} />
            <View style={style.boxBot}>
                <Text style={style.cadastrar}>Bem vindo</Text>
                {/*Parte para fazer login diretamente
                //* tem que integrar com back end */}
                <TextInput placeholder="E-mail" style={style.inputText} />
                <TextInput placeholder="Senha" style={style.inputText} />
                <TextInput placeholder="Confirme sua senha" style={style.inputText} />
                {/*Check Box vender minha alma para o diabo, importado do index.js*/}
                <CheckBox />
                {/*Botão para logar o usuario
                //! tem que finalizar - Back End */}
                <View style={style.boxBotton}>
                    <View style={style.buttonCadastro}>
                        <Button title="Entrar"
                            color={'#0BD979'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}