import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type SimpleTouchableOpacityProps = {
  title: string;
  onPress: () => void;
};

export default function SingleTouchableOpacity({
  title,
  onPress,
}: SimpleTouchableOpacityProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12, // margen externo separa el boton de lo que esta arriba
    backgroundColor: '#007bff',//Color fondo boton
    paddingVertical: 10, //Espacio interno,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  text: {
    color: '#0e0909',
    fontSize: 16,
    fontWeight: '600',
  },
});