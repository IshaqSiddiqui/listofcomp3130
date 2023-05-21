import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (

    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'>
        <Text h3 style={{marginBottom: 50}}/>
        <View style={styles.inputContainer}>

            <TextInput placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}/>  

            <TextInput placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry /> 
            
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={() => {}} style={styles.button}>
            <Button containerStyle={styles.buttonlogintext} title='Login'/>  
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {}} style={styles.buttonregister}>
            <Button containerStyle={styles.buttonregistertext} title='Register'/>  
            </TouchableOpacity>
            </View>
           
    </KeyboardAvoidingView>
      
  )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
    }, 
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#C0C0C0',
    }, 
    button:{
        backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        padding: 15
    },
    buttonregister:{

        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        padding: 15
    },
    buttonregistertext:{
        color: 'white', 
        fontWeight: '700',
    },
    buttonContainer: {
        marginTop: 40,
        width: '60%',
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        alignItems: 'center',
       
    }
});
