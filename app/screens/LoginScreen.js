import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../firebase/firebase-config';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const signIn = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
            setIsAuthenticated(true);
            console.log(res);
            navigation.navigate("AnimalsList");
        })
        .catch((er) => {
            Alert.alert(er.message);
            console.log(er);
        })
    }

    const logout = () => {
        signOut(authentication)
        .then((re) => {
            setIsAuthenticated(false);
        })
        .catch((er) => {
            Alert.alert(er.message);
            console.log(er);
        })
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
                onChangeText={(email) => setEmail(email)}
                value={email}
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
                onPress= { signIn }
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
        height: 55,
        width: '100%',
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