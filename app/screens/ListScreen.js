import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../components/Header'
import { List } from '../components/List';

export const ListScreen = () => {

  return (
    <SafeAreaView style={styles.listView}>
      <Header title='Animals waiting for a new home!'/>
      <List />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    paddingBottom: 90
  }
});