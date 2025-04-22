import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[cep, setCep] = useState('')
  const[endereco, setEndereco] = useState({
    logradouro: '',
    complemento: '',
    unidade: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: '',
    regiao: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  })

  const buscarCEP = async () => {
    let r = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await r.json()
    setEndereco(dados)
  }

  const resp = () => {
    if(endereco.logradouro != '' && endereco.logradouro != undefined){
      return (`
        Logradouro: ${endereco.logradouro}
        Complemento: ${endereco.complemento}
        Unidade: ${endereco.unidade}
        Bairro: ${endereco.bairro}
        Localidade: ${endereco.localidade}
        UF: ${endereco.uf}
        Estado: ${endereco.estado}
        Regiao: ${endereco.regiao}
        IBGE: ${endereco.ibge}
        GIA: ${endereco.gia}
        DDD: ${endereco.ddd}
        SIAFI: ${endereco.siafi}
      `)
    } else if(endereco.logradouro == undefined){
      return('CEP não identificado!')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={(e) => {setCep(e); buscarCEP()}}
        placeholder='CEP'
      />
      <Text>{resp()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: 40,
    borderRadius: 4,
    color: 'gray',
    margin: 10
  },
});
