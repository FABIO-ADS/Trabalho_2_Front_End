import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Inicio from './src/screens/inicio';
import Detalhes from './src/screens/detalhes';
import Editar from './src/screens/editar';
import Cadastrar from './src/screens/cadastrar';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Editar" component={Editar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;