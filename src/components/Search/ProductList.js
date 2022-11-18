import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import { map } from "lodash";
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors";

export default function ProductList(props) {
  const { products } = props;

  const getToProduct = (id) => {
    console.log("Cargar producto -> " + id);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>RESULTADOS</Text>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => getToProduct(product._id)}
        >
          <Text>{product.title}</Text>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
  },
});
