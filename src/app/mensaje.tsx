import {router} from 'expo-router';
import {Button,Text,View} from 'react-native';

export default function MensajeScreen(){
    return (
    <View>
        <Text>Esta es la nueva pagina de mensaje</Text>
        <Button title="Volver" onPress={() => router.back()} />
    </View>
    );
}
