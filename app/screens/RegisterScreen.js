import { StyleSheet, Text, View, Alert, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const signUp = () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
            console.log(res);
            navigation.navigate("Login");
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

            <TouchableOpacity 
                style={styles.registerBtn}
                onPress= { signUp }
            >
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen

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
    registerBtn:
    {
        width:"75%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#ff8080",
    },
    registerText:{
        fontWeight: '600',
        fontSize: 20,
        color: '#fff'
    }
})