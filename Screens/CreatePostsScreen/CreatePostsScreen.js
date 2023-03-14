import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./CreatePostsScreen.styles.js";

const INITIAL_STATE = {
  image: "",
  name: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleImageChange = () =>
    setState((prevState) => ({ ...prevState, image: "path" }));
  const handleNameChange = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const handleLocationChange = (value) =>
    setState((prevState) => ({ ...prevState, location: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log(state);
    setState(INITIAL_STATE);
    navigation.navigate("PostsScreen");
  };

  const handleDelete = () => setState(INITIAL_STATE);

  const { name, location } = state;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            activeOpacity={0.8}
            onPress={handleImageChange}
          >
            <Feather name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.uploadText}>Upload a photo</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
            placeholder="Name..."
            autoCapitalize="none"
          />
          <View style={styles.locationField}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            <TextInput
              style={{ ...styles.input, ...styles.locationInput }}
              onChangeText={handleLocationChange}
              placeholder="Location..."
              autoCapitalize="none"
              value={location}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.publishButton}
          onPress={handleSubmit}
        >
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.trashButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.trashButton}
            onPress={handleDelete}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
