import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card } from './Card';

export const Animals =
  [
    {
      "animalId": 1,
      "name": "Piggy",
      "species": "Świnka Morska",
      "details": "Świnka morska po testach nie wpływających na jej zdrowie",
      "age": "1 rok",
      "createdAt": "2022-07-02",
      "quantity": 2,
      "organizationId": 1,
      "image": "guineajpg"
    },
    {
      "animalId": 2,
      "name": "Ratty",
      "species": "Szczurki",
      "details": "Szczury szczepu Wistar (albinosy), z nadwyżki hodowlanej ",
      "age": "3-7 miesięcy",
      "createdAt": "2022-07-02",
      "quantity": 60,
      "organizationId": 1,
      "image": "ratjpg"
    },
    {
      "animalId": 3,
      "name": "Mousy",
      "species": "Myszki",
      "details": "Czarne myszki po testach behawioralnych",
      "age": "7 miesięcy",
      "createdAt": "2022-07-02",
      "quantity": 30,
      "organizationId": 1,
      "image": "mousejpg"
    },
    {
      "animalId": 4,
      "name": "Two rabbits",
      "species": "Króliki",
      "details": "Króliki albinosy po testach behawioralnych",
      "age": "5 miesięcy",
      "createdAt": "2022-07-02",
      "quantity": 2,
      "organizationId": 1,
      "image": "rabbitjpg"
    },
    {
      "animalId": 5,
      "name": "Białe myszki",
      "species": "Myszy albinosy",
      "details": "Białe myszy pochodzące z nadwyżki hodowlanej",
      "age": "2 miesiące",
      "createdAt": "2022-07-02",
      "quantity": 12,
      "organizationId": 1,
      "image": "ratpng"
    }
];

export const List = () => {

    const _renderItem = ({ item }) => (<Card key={item.animalId} animal={item} /> );

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