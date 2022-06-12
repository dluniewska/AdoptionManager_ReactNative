import { useRoute } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { AnimalsDetails } from '../components/AnimalDetails';
import ImagesFiles from '../helpers/ImagesFiles';

export const AnimalDetailsScreen = ( ) => {

    const route = useRoute();
    let AnimalDetails = route.params.AnimalDetails;

  return (
    <AnimalsDetails animal={AnimalDetails} />
  )
}
