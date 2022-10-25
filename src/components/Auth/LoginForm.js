import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";


export default function LoginForm(props) {
    const {changeForm} = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Formulario enviado");
            console.log(formData);
        }
    })

    return (
    <View>
      <TextInput label="Email o Username" style={formStyle.input} />
      <TextInput label="Contraseña"  style={formStyle.input} />
      <Button mode="contained" style={formStyle.btnSuccess} onPress={formik.handleSubmit}>Entrar</Button>
      <Button mode="text" style={formStyle.btnText} labelStyle={formStyle.btnTextLabel} onPress={changeForm}>Registrarse</Button>
    </View>
  )
}

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    }
}