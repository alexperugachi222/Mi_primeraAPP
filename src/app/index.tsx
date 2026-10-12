import React from 'react';
import { Text, View, StyleSheet, Image,Button,Alert,TextInput } from 'react-native';
import SingleTouchableOpacity  from '@/components/simple-touchable-button';
import {router} from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buenos Dias</Text>
      <Image
        source={require('../../assets/images/images.jpg')}
        style={styles.image}
      />
      <Button 
      color = 'red'
      title = "Pres"
      onPress = {() => Alert.alert("Hola EPN") }
      />
      <SingleTouchableOpacity
        title="Touchable Reutilizable"
        onPress={() => Alert.alert("Hola desde Touchable Opacity")}
      />
      <SingleTouchableOpacity
        title="Boton de Navegacion "
        onPress={() => router.push("/mensaje")}
      />
      <SingleTouchableOpacity
        title="Formulario "
        onPress={() => router.push("/formulario")}
      />
      <TextInput/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfdff',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  image: {
    width: 310,
    height: 240
    
  },
});

export default App;