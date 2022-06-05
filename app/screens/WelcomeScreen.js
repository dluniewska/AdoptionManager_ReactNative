import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, View, Alert, Text, Dimensions } from 'react-native';
import Orientation from '../helpers/Orientation';


function WelcomeScreen(props) {

    const [orientation, setOrientation] = useState(
        Orientation.isPortrait() ? 'portrait' : 'landscape'
      );
    
      useEffect(() => {
        Dimensions.addEventListener('change', () => {
          setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
        });
      }, []);

    return (

        <View style={styles.background} >
            
            <View style={styles.headerView}>
                <Text style={styles.header}>adoption manager</Text>
            </View>
            
            <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-evenly', 
                    flexDirection: orientation === 'portrait' ? 'column' : 'row' ,
                    margin: 20,
                    marginTop: orientation === 'portrait' ? 100 : 50 ,
            }}>
                    <View
                    onPress={() => Alert.alert('login pressed')}
                    style={styles.button}
                    width={orientation === 'portrait' ? '90%' : '40%'}
                    >
                        <Text style={styles.text}>Log In</Text>
                    </View>

                    <View
                    onPress={() => Alert.alert('register pressed')}
                    style={styles.button}
                    width={orientation === 'portrait' ? '90%' : '40%'}
                    >
                        <Text style={styles.text}>Register</Text>
                    </View>
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
        fontSize: 60,
        padding: 10,
        top: 60,
    },
    headerView: {
        alignItems: 'center',
        width: '100%'
    }
})

export default WelcomeScreen;