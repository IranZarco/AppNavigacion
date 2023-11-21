import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreen } from '../screens/InicioScreen';
import { UnoScreen } from '../screens/UnoScreen';
import { DosScreen } from '../screens/DosScreen';
import { FinalScreen } from '../screens/FinalScreen';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle:{
        backgroundColor:'green'
      }
    }}>
      <Stack.Screen name="InicioScreen" options= {{title:'Pagina Inicial'}} component={InicioScreen} />
      <Stack.Screen name="UnoScreen" options= {{title:'Pagina 1'}} component={UnoScreen} />
      <Stack.Screen name="DosScreen" options= {{title:'Pagina 2'}} component={DosScreen} />
      <Stack.Screen name="FinalScreen" options= {{title:'Pagina Final'}} component={FinalScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
