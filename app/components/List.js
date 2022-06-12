import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card } from './Card';

export const List = () => {

    const [Animals, setAnimals] = useState([
        {
          animalId: 1,
          name: "Rat",
          species: "Rat",
          kind: "Wistar",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "LabRescue",
          image: "ratjpg"
        },
        {
          animalId: 2,
          name: "Mouse",
          species: "Mouse",
          kind: "Black",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "LabRescue",
          image: "mousejpg"
        },
        {
          animalId: 3,
          name: "Rabbit",
          species: "Rabbit",
          kind: "Stinky",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "Tri-City Animal Facility",
          image: "rabbitjpg"
        },
        {
          animalId: 4,
          name: "GuineaPig",
          species: "Guinea Pig",
          kind: "Happy",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "LabRescue",
          image: "guineajpg"
        },
        {
          animalId: 5,
          name: "GuineaPig2",
          species: "Guinea Pig",
          kind: "Happy",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "Tri-City Animal Facility",
          image: "guineajpg"
        },
        {
          animalId: 6,
          name: "Rabbit2",
          species: "Rabbit",
          kind: "Stinky",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "Nencki Institute",
          image: "rabbitjpg"
        },
        {
          animalId: 7,
          name: "Rat2",
          species: "Rat",
          kind: "Wistar",
          dateOfBirth: "2021-06-05",
          status: "Non",
          userId: null,
          organization: "Nencki Institute",
          image: "ratjpg"
        }
      ]);

    const _renderItem = ({ item }) => (<Card key={item.animalId} name= {item.name} organization={item.organization} image={item.image} /> );

    return (
        <View style={styles.cardContainer}>
            <FlatList 
            data={Animals}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={(item) => item.animalId}
            renderItem={_renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffe6e6',
        paddingTop: 20,
    }
  });