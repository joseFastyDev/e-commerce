import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Favorite(props) {
  const { product } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const addFavorite = async () => {
    if (!loading) {
      setLoading(true);
      try {
        await addFavoriteApi(auth, product._id);
        setIsFavorite(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };
  return (
    <Button
      mode="contained"
      contentStyle={styles.btnAddFavoritesContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addFavorite}
      loading={loading}
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
