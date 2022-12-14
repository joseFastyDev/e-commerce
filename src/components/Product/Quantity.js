import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Quantity(props) {
  const { quantity, setQuantity } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ]);

  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      defaultValue={quantity}
      open={open}
      items={items}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      setItems={setItems}
      containerStyle={styles.containerStyle}
      itemStyle={styles.itemStyle}
      dropDownStyle={styles.dropDownPicker}
      style={styles.dropDownPicker}
      labelStyle={styles.labelStyle}
      onChangeValue={(value) => setQuantity(value)}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: 100,
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    color: "#000",
  },
});
