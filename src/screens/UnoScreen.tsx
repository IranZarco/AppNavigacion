import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { DosScreen } from './DosScreen'
import { styles } from '../../theme/appTheme';

export const UnoScreen = () => {
  const navigator = useNavigation()
  return (
    <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.25}} locations={[0,0.5,0.6]} colors={['#76FFEF', '#FF337A']} style={styles.linearGradient}>
      <Text style={styles.title}>
        UnoScreen
      </Text>

      <Button
        title='siguiente pagina'
        onPress={()=>navigator.navigate(DosScreen)}
      />
      
    </LinearGradient >
  )
}
