import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FinalScreen } from './FinalScreen';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#FF781B',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
});
