import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../components/Header'
import { List } from '../components/List';

export const ListScreen = () => {

  // let {container} = styles.container
  return (
    <SafeAreaView>
      <Header title='Animals waiting for a new home!'/>
      <List />
    </SafeAreaView>
  )
}