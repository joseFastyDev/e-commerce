import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Buy(props) {
  const { product, quantity } = props;

  const addProductCart = () => {
    console.log("Producto añadido al carrito.");
    console.log(product.title);
    console.log("Cantidad: " + quantity);
  };
  return (
    <Button
      mode="contained"
      contentStyle={styles.btnBuyContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addProductCart}
    >
      Añadir a la cesta
    </Button>
  );
}

const styles = StyleSheet.create({
  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
});
