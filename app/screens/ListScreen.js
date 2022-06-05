import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';


export const ListScreen = () => {
  return (
    <View>
    <Text>Opponent's Guess</Text>
      <Button title="LOWER"  />
      <Button
        title="GREATER" />
  </View>
  )
}
