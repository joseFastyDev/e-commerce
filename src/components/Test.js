import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "react-native-paper";

export default function Test() {
  return (
    <View>
      <Text>Estamos en Test Component</Text>
      <Button onPress={() => console.log("Hola")}>Click Me</Button>
    </View>
  )
}