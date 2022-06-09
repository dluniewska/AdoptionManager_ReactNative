import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

  return (
    <View
    style={styles.container}
    // behavior="padding"
    >
    <Image source = {require("../assets/rat_png.png")} style = {styles.image} />
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Email."
                placeholderTextColor="#bfbfbf"
                onChangeText={(email) => setUsername(email)}
                value={username}
            />
            </View>
            
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Password."
                placeholderTextColor="#bfbfbf"
                secureTextEntry={true}
                onChangeText={(passwd) => setPassword(passwd)}
                value={password}
            />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.loginBtn}
                // onPress= { }
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        height: 60,
        backgroundColor: '#ffe6e6',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 25,
        width: '75%'
    },
    input: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize: 16
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginBottom: 40
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginTop: 20
    },
    loginBtn:
    {
        width:"75%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#ff8080",
    },
    loginText:{
        fontWeight: '600',
        fontSize: 20,
        color: '#fff'
    }
})