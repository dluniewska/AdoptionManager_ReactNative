import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagesFiles from '../helpers/ImagesFiles';
import { useNavigation } from '@react-navigation/native';

export const Card = (props) => {

  const navigation = useNavigation();

  let Animal = props.animal;

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AnimalsDetails", {AnimalDetails: Animal})}>
        <Image source={ImagesFiles[Animal.image]} style={styles.cardImage} />
        <Text style={styles.animalName}>{Animal.name}</Text>
        <Text style={styles.organization}>
          <Text>Organization: </Text>
          <Text style={styles.organizationName}>{Animal.organization}</Text>
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