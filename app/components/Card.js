import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const Card = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
        <Image source={require(`../assets/rat.jpg`)} style={styles.cardImage} />
        <Text style={styles.animalName}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 15,
      overflow: 'hidden',
      width: '95%',
      shadowColor: '#000',
      shadowOpacity: 1,
      shadowOffset: {
        width: 10,
        height: 10
      },
      alignSelf: 'center',
      elevation: 5
    },
    cardImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    animalName: {
        fontSize: 20,
        padding: 10
    }
  });