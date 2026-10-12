import {router} from 'expo-router';
import {Button,Text,TextInput,View} from 'react-native';
export default function FormularioScreen(){
    return (
<View>
    <Text style={{ fontSize: 18, fontWeight: 'bold',color: 'black' }}>Ingrese su nombre</Text>
    <TextInput placeholder="Ingrese su nombre" />
    <Text style={{ fontSize: 18, fontWeight: 'bold',color: 'green' }}>Ingrese su correo</Text>
    <TextInput placeholder="Ingrese su correo" />
    <Text style={{ fontSize: 18, fontWeight: 'bold',color: 'blue' }}>Ingrese su telefono</Text>
    <TextInput placeholder="Ingrese su telefono"/>    
    <Button title="Volver" onPress={() => router.back()} />
</View>
    );
}