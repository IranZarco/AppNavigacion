import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

interface Props extends StackScreenProps <any,any>{};

export const InicioScreen = ({navigation}:Props) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        InicioScreen
      </Text>

      <Button
        title='Ir a la pagina uno'
        onPress={()=>navigation.navigate('UnoScreen')}
      />

      <Text style={styles.title}>
        Iran Cardenas Zarco😎    👍DSM-43☄
      </Text>
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