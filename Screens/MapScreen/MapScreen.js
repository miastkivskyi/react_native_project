import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import maps from "../../assets/data/maps";
import styles from "./MapScreen.styles.js";

const MapScreen = ({
  navigation,
  route: {
    params: { latitude, longitude },
  },
}) => {
  return (
    <View style={styles.containerMaps}>
      <MapView
        style={styles.maps}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        {maps.map(({ id, name, address, coordinate }) => (
          <Marker
            key={id}
            title={address}
            coordinate={coordinate}
            description={name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
