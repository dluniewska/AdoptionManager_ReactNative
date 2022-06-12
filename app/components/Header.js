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
        justifyContent: 'flex-end',
        marginTop: 35,
        backgroundColor: '#fff',
        paddingBottom: 25,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
          width: 10,
          height: 10
        },
        elevation: 5,
        overflow: 'visible',
        zIndex: 1
    },
    headerText: {
        fontSize: 25,
        fontWeight: '500',
        textAlignVertical: 'center',
        paddingLeft: '5%'
    }
  });

