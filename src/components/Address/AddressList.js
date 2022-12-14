import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import { formStyle } from "../../styles";
import { deleteAddressApi } from "../../api/address";

export default function AddressList(props) {
  const { addresses, setReloadAdress } = props;
  const { auth } = useAuth();
  const navigation = useNavigation();

  const deleteAddressAlert = (address) => {
    Alert.alert(
      "Eliminando dirección",
      `¿Estás seguro de que quieres eliminar la dirección ${address.title}?`,
      [
        {
          text: "NO",
        },
        {
          text: "SI",
          onPress: () => deleteAddress(address._id),
        },
      ],
      { cancelable: false }
    );
  };

  const goToUpdateAddress = (idAddress) => {
    navigation.navigate("add-address", { idAddress });
  };

  const deleteAddress = async (idAddress) => {
    try {
      await deleteAddressApi(auth, idAddress);
      setReloadAdress(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {map(addresses, (address) => (
        <View key={address._id} style={styles.address}>
          <Text style={styles.title}>{address.title}</Text>
          <Text>{address.name_lastname}</Text>
          <Text>{address.address}</Text>
          <View style={styles.blockLine}>
            <Text>{address.state}, </Text>
            <Text>{address.city}, </Text>
            <Text>{address.postal_code}</Text>
          </View>
          <Text>{address.country}</Text>
          <Text>Numero de telefono: {address.phone}</Text>
          <View style={styles.actions}>
            <Button
              mode="contained"
              style={formStyle.btnSuccess}
              onPress={() => goToUpdateAddress(address._id)}
            >
              Editar
            </Button>
            <Button
              mode="contained"
              style={formStyle.btnSuccess}
              onPress={() => deleteAddressAlert(address)}
            >
              Eliminar
            </Button>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  address: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  blockLine: {
    flexDirection: "row",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
