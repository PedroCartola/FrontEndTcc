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
import CheckBox from "./index.js";

export default function Login(){
    return(
        //contem a todos
        <View style={style.conteiner}>
            <Image
                source={Logo}
                style={style.image}
                />
            <View style={style.boxBot}>
                {/*Texto de Criar conta*/}
                <Text style={style.cadastrar}>Cadastre-se</Text>
                {/*Parte para fazer login diretamente
                //* tem que integrar com back end */}
                <TextInput placeholder="Nome" style={style.inputText} />
                <TextInput placeholder="E-mail" style={style.inputText} />
                <TextInput placeholder="Senha" style={style.inputText} />
                <TextInput placeholder="Confirme sua senha" style={style.inputText} />
                <TextInput placeholder="CPF" style={style.inputText} />
                <TextInput placeholder="Genero" style={style.inputText} />
                <TextInput placeholder="Data de nascimento" style={style.inputText} />
                {/*Check Box vender minha alma para o diabo, importado do index.js*/}
                <CheckBox />
                {/*Botão para logar o usuario
                //! tem que finalizar - Back End */}
                <View style={style.boxBotton}>
                    <View style={style.buttonCadastro}>
                        <Button title="Cadastrar"
                            color={'#0BD979'}
                        />
                    </View>
                </View>
                <Text>Já tem uma conta? <>Login in</></Text>
            </View>
        </View>
    )
}