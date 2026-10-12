//Importar slot desde expo router;
//Slot es un componente que servira como espacio donde se va a rendizar la pantalla "activa"segun la ruta

import {Slot, Stack} from 'expo-router';

//Layout raiz del app.
//este componente envuelve todas las rutas y vistas dentro de la carpeta app
export default function Layout() { 

    return <Stack / >;
}
