import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard, Animated } from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  AnimatedIcon,
  inputAnimationWidth,
  inputAnimation,
  animatedTransition,
  animatedTransitionReset,
  arrowAnimation,
} from "./SearchAnimation";
import { updateSearchHistoryApi } from "../../api/search";
import SearchHistory from "./SearchHistory";
import colors from "../../styles/colors";

export default function Search(props) {
  const { currentSearch } = props;
  const [searchQuery, setSearchQuery] = useState(currentSearch || "");
  const [showHistory, setShowHistory] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const navigation = useNavigation();

  const openSearch = () => {
    animatedTransition.start();
    setShowHistory(!showHistory);
  };

  const closeSearch = () => {
    animatedTransitionReset.start();
    Keyboard.dismiss();
    setShowHistory(!showHistory);
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const onSearch = async (reuseSearh) => {
    const isReuse = typeof reuseSearh === "string";

    closeSearch();

    !isReuse && (await updateSearchHistoryApi(searchQuery));

    navigation.push("search", {
      search: isReuse ? reuseSearh : searchQuery,
    });
  };

  return (
    <View
      style={styles.container}
      onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
    >
      <View style={styles.containerInput}>
        <AnimatedIcon
          name="arrow-left"
          size={20}
          style={[styles.backArrow, arrowAnimation]}
          onPress={closeSearch}
        />

        <Animated.View style={[inputAnimation, { width: inputAnimationWidth }]}>
          <Searchbar
            placeholder="Busca tu producto"
            value={searchQuery}
            onFocus={openSearch}
            onChangeText={onChangeSearch}
            onSubmitEditing={onSearch}
          />
        </Animated.View>
      </View>
      <SearchHistory
        showHistory={showHistory}
        containerHeight={containerHeight}
        onSearch={onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  containerInput: {
    position: "relative",
    alignItems: "flex-end",
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 15,
    color: colors.fontLight,
  },
});
