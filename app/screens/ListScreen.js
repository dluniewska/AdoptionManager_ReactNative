import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../components/Header'
import { List } from '../components/List';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authentication } from '../firebase/firebase-config';

export const ListScreen = () => {

  // onAuthStateChanged(authentication, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  return (
    <SafeAreaView>
      <Header title='Animals waiting for a new home!'/>
      <List />
    </SafeAreaView>
  )
}