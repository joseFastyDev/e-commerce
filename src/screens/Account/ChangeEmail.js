import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from '@react-navigation/native'
import { useFormik } from "formik"
import * as Yup from "yup"
import { getMeApi } from "../../api/user"
import useAuth from '../../hooks/useAuth'
import colors from '../../styles/colors'
import { formStyle } from '../../styles'

export default function ChangeEmail() {
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                console.log(response.email);
            })()
        }, [])
    )

    
  return (
    <View style={styles.container}>
      <TextInput 
        label="Email"
        style={formStyle.input}
      />
      <Button mode="contained" style={formStyle.btnSuccess}>
        Cambiar email
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});