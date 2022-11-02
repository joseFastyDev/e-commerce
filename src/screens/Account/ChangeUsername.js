import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { formStyle } from '../../styles'

export default function ChangeUsername() {
  return (
    <View style={styles.contained}>
        <TextInput label="Nombre de usuario" style={formStyle.input} />
        <Button mode="contained" style={formStyle.btnSuccess}>
            Cambiar nombre de usuario
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    contained: {
        padding: 20
    }
})