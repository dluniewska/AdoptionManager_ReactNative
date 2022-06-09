import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, View, Alert, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Orientation from '../helpers/Orientation';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

function WelcomeScreen(props) {

    // onAuthStateChanged(getAuth(), (user) => {
    //     if (user) {
    //       console.log(user);
    //     } else {
    //       console.log("signed out");
    //     }
    // });

    const [orientation, setOrientation] = useState(
        Orientation.isPortrait() ? 'portrait' : 'landscape'
      );
    
    useEffect(() => {
        Dimensions.addEventListener('change', () => {
          setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
        });
    }, []);

    const navigation = useNavigation();

    return (

        <View style={styles.background} >
            
            <View style={styles.headerView} top={orientation === 'portrait' ? 120 : 50}>
                <Text style={styles.header}>adoption manager</Text>
            </View>
            
            <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-evenly', 
                    flexDirection: orientation === 'portrait' ? 'column' : 'row' ,
                    margin: 20,
                    marginTop: orientation === 'portrait' ? 120 : 50 ,
            }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                        <View
                        style={styles.button}
                        width={orientation === 'portrait' ? '90%' : '40%'}
                        >
                            <Text style={styles.text}>Log In</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
                        <View
                        style={styles.button}
                        width={orientation === 'portrait' ? '90%' : '40%'}
                        >
                            <Text style={styles.text}>Register</Text>
                        </View>
                    </TouchableWithoutFeedback>
            </View>

            <Image 
                style={styles.image}
                source={require("../assets/rat_png.png")}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain' 
    },
    button: {
        height: 60,
        backgroundColor: '#ffe6e6',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 25,
        fontWeight: '400',
        color: '#1a1a1a'
    },
    header: {
        fontWeight: '900',
        fontSize: 30,
        padding: 10,
        fontStyle: 'italic'
    },
    headerView: {
        alignItems: 'center',
        width: '100%'
    }
})

export default WelcomeScreen;