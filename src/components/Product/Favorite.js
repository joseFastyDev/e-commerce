import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Favorite(props) {
  const { product } = props;
  const addFavorite = () => {
    console.log("Producto añadido a la lista de favoritos");
    console.log(product.title);
  };
  return (
    <Button
      mode="contained"
      contentStyle={styles.btnAddFavoritesContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addFavorite}
    >
      Añadir a favoritos
    </Button>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
  },
  btnAddFavoritesContent: {
    backgroundColor: "#057b00",
    paddingVertical: 5,
  },
  btn: {
    marinTop: 20,
    borderRadius: 5,
  },
});
