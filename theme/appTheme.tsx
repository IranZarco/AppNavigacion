import { StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: '#FF781B',
    },
    title: {
        color: 'black',
        marginBottom: 10, 
        fontSize:30,
        textAlign: 'center',
        marginVertical: 20,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
});
