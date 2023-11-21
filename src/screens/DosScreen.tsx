import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FinalScreen } from './FinalScreen';
import { styles } from '../../theme/appTheme';

export const DosScreen = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text style={styles.title}> 
        DosScreen
      </Text>

      <Button
        title='Ir a la pagina final'
        onPress={()=>{navigator.navigate(FinalScreen)}}
      />
    </View>
  )
}
