import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps <any,any>{};
export const FinalScreen = ({navigation}:Props) => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FinalScreen
      </Text>
      <Text style={styles.title}>
        Navegando con argumentos
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('EstudianteScreen',{
        id:1,
        nombre: 'Iran'
      })}>
        <Text style={styles.title}>Ir a estudiante</Text>
      </TouchableOpacity>
    </View>
  )
}
