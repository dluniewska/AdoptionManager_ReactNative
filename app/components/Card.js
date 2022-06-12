import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagesFiles from '../helpers/ImagesFiles';

export const Card = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
        <Image source={ImagesFiles[props.image]} style={styles.cardImage} />
        <Text style={styles.animalName}>{props.name}</Text>
        <Text style={styles.organization}>
          <Text>Organization: </Text>
          <Text style={styles.organizationName}>{props.organization}</Text>
        </Text>
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
        fontSize: 25,
        paddingTop: 15,
        paddingLeft: 20
    },
    organization: {
        fontSize: 16,
        padding: 15,
        paddingTop: 5,
        paddingLeft: 20
    },
    organizationName: {
      fontWeight: '500'
    }
  });