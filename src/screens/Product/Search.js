import React from "react";
import { View, Text } from "react-native";

export default function Search(props) {
  const { route } = props;
  const { params } = route;

  return (
    <View>
      <Text>{params.search}</Text>
    </View>
  );
}
