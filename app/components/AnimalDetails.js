import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Animals } from '../components/List';
import ImagesFiles from '../helpers/ImagesFiles';

export const AnimalsDetails = (props) => {

    const animal = props.animal;
    
    console.log(animal);

    return (
        <View style={styles.container}>
            <Image source={ImagesFiles[animal.image]} style={styles.image} />
            <View style={styles.header}>
                <Text style={styles.animalName}>{animal.name}</Text>
                <View style={styles.separator} />
            </View>
            <View style={styles.detailsList}>
                <Text style={styles.detail}>
                    <Text style={styles.detailsTitle}>Gatunek: </Text>
                    <Text>{animal.species}</Text>
                </Text>
                <Text style={styles.detail} >
                    <Text style={styles.detailsTitle}>Wiek: </Text>
                    <Text>{animal.age}</Text>
                </Text>
                <Text style={styles.detail}>
                    <Text style={styles.detailsTitle}>Szczegóły: </Text>
                    <Text >{animal.details}</Text>
                </Text>
                <Text style={styles.detail}>
                    <Text style={styles.detailsTitle}>Ilość: </Text>
                    <Text>{animal.quantity}</Text>
                </Text>                
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert("You Adopted Animal!", "Bravo! You saved one little-big life!")}>
                        <View
                        style={styles.button}
                        >
                            <Text style={styles.buttonText}>ADOPTUJ!</Text>
                        </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: "#fff"
    },
    separator: {
        backgroundColor: '#ffe6e6',
        height: 2,
        width: 165,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 20

    },
    detailsList: {
        padding: 25
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    animalName: {
        fontSize: 50,
        paddingTop: 30,
        textAlign: 'center',
        fontWeight: '600',
    },
    detail: {
        fontSize: 25,
        padding: 12,
        paddingTop: 2,
        paddingLeft: 20
    },
    detailsTitle: {
        fontSize: 30,
        padding: 10,
        paddingTop: 2,
        paddingLeft: 20,
        fontWeight: '500'
    },
    button: {
        height: 80,
        backgroundColor: '#ff8080',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff'
    },
    buttonContainer: {
        alignContent: 'center',
        width: '100%',
    }
});