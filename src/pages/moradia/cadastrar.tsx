import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Button,
} from 'react-native';
import { style } from "../login/cadastroStyle";
import BuscaCep from './buscaCep';

export default function CadastrarMoradia(){
    return(
        //contem a todos
        <View style={style.conteiner}>
            <View style={{flex: 3}} />
            <View style={style.boxBot}>
                <Text style={style.cadastrar}>Cadastrar moradia</Text>
                {/*Parte para cadastrar uma república
                //! tem que integrar com back end */}
                <TextInput placeholder="Nome" style={style.inputText} />
                <BuscaCep />
                {/*Botão para criar uma república
                //! tem que finalizar - Back End */}
                <View style={style.boxBotton}>
                    <View style={style.buttonCadastro}>
                        <Button title="Criar moradia"
                            color={'#0BD979'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}