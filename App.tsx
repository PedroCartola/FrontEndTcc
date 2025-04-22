import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/login';
import Cadastro from './src/pages/login/cadastro';
import Moradia from './src/pages/moradia/cadastrar';
import MyStack from './src/global/themes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Moradia />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});