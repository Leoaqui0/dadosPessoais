import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/componentes/title';
import Form from './src/componentes/forms';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <Text style={styles.rodape}>©Leonardo Silva</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:"hidden",
  },
  rodape:{
    fontSize:12,
    color: "#000",
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
  },

});