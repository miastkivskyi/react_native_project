import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  containerMaps: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maps: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default styles;
