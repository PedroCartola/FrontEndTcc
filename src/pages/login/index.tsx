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
            <View style={style.boxTop}>
                {/*Texto de Criar conta*/}
                <Text style={style.criarConta}>Criar conta</Text>
                <Text>Começe com 30 dias gratuitos. Cancele a qualquer momento</Text>
                {/*APIs do google e facebook
                //? Ainda não aprendido - Front End */}
                <View style={style.buttonLogin}>
                    <Button title='Google'/>
                    <Button title="Facebook" />
                </View>
                {/*Separação das APIs*/}
                <Text>===================ou===================</Text>
                {/*Parte para fazer login diretamente
                //* tem que integrar com back end */}
                <TextInput placeholder="E-mail" style={style.inputText} />
                <TextInput placeholder="Senha" style={style.inputText} />
                <TextInput placeholder="Confirme sua senha" style={style.inputText} />
                {/*Esqueseu a senha e check box para manter-se logado
                //! tem que criar outra tela para o "Esqueseu a senha?" - front End */}
                <Text>Esqueseu a senha?</Text>
                {/*Check Box Lembrar de mim, importado do index.js*/}
                <CheckBox />
                {/*Botão para logar o usuario
                //! tem que finalizar - Back End */}
                <View style={style.boxBotton}>
                    <View style={style.buttonLogin}>
                        <Button title="Login" color={'black'}></Button>
                    </View>
                </View>
                <Text>Já tem uma conta? <>Login in</></Text>
            {/*Logo / marca */}
            </View>
                <Image
                source={Logo}
                style={style.image}
                />
        </View>
    )
}