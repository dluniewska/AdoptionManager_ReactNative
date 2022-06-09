import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        marginTop: 30
    },
    headerText: {
        fontSize: 25,
        fontWeight: '500',
        textAlignVertical: 'center',
        paddingLeft: '5%'
    }
  });

