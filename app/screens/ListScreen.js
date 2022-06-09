import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, Alert, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';

export const ListScreen = () => {
  
  const [Animals, setAnimals] = useState([
    {
      animalId: 1,
      name: "Rat",
      species: "Rat",
      kind: "Wistar",
      dateOfBirth: "2021-06-05",
      status: "Non",
      userId: null,
      organizationId: null,
      image: "rat.jpg"
    },
    {
      animalId: 2,
      name: "Mouse",
      species: "Mouse",
      kind: "Black",
      dateOfBirth: "2021-06-05",
      status: "Non",
      userId: null,
      organizationId: null,
      image: "mouse.jpg"
    },
    {
      animalId: 3,
      name: "Rabbit",
      species: "Rabbit",
      kind: "Stinky",
      dateOfBirth: "2021-06-05",
      status: "Non",
      userId: null,
      organizationId: null,
      image: "rabbit.jpg"
    },
    {
      animalId: 4,
      name: "GuineaPig",
      species: "Guinea Pig",
      kind: "Happy",
      dateOfBirth: "2021-06-05",
      status: "Non",
      userId: null,
      organizationId: null,
      image: "guinea.jpg"
    }
  ]);

  const _renderItem = ({ item }) => (<Card key={item.animalId} name= {item.name} /> );

  // let {container} = styles.container
  return (
    <SafeAreaView style={styles.cardContainer}>
    <Text style={styles.title}>Animals waiting for a new home!</Text>
    <FlatList 
      data={Animals}
      keyExtractor={(item) => item.animalId}
      renderItem={_renderItem}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
      flex: 1,
      backgroundColor: '#ffe6e6'
  },
  title: {
    marginTop: 60,
    marginBottom: 15,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
    width: 'auto'
  }
});