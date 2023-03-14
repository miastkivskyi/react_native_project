import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import styles from "./RegistrationScreen.styles.js";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

const NewRegistration = ({ navigation }) => {
  const [state, setstate] = useState(INITIAL_STATE);
  const [hidePassword, setHidePassword] = useState(true);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const toggleHidePassword = () => setHidePassword(!hidePassword);

  const handleLoginChange = (value) =>
    setstate((prevState) => ({ ...prevState, login: value }));
  const handleEmailChange = (value) =>
    setstate((prevState) => ({ ...prevState, email: value }));
  const handlePasswordChange = (value) =>
    setstate((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
    setstate(INITIAL_STATE);
    navigation.navigate("Home");
  };

  const hideKeyboard = () => {
    setHidePassword(true);
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  };

  const { height, width } = Dimensions.get("window");
  const { login, email, password } = state;

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={{ ...styles.image, width: width, height: height }}
          source={require("../../assets/images/background.jpg")}
        >
          <View style={styles.container}>
            <View style={styles.containerImage}>
              <View style={styles.addImage}>
                <TouchableOpacity style={styles.addButton}>
                  <Image
                    style={styles.addIcon}
                    source={require("../../assets/images/plus.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registration</Text>
                <View style={styles.inputBlock}>
                  <TextInput
                    style={styles.inputField}
                    value={login}
                    onFocus={() => setIsKeyboardVisible(true)}
                    onChangeText={handleLoginChange}
                    placeholder="Login"
                  />
                  <TextInput
                    style={styles.inputField}
                    value={email}
                    onFocus={() => setIsKeyboardVisible(true)}
                    onChangeText={handleEmailChange}
                    placeholder="E-mail address"
                  />
                  <View style={styles.passwordFieldContainer}>
                    <TextInput
                      style={styles.inputField}
                      secureTextEntry={hidePassword}
                      value={password}
                      onFocus={() => setIsKeyboardVisible(true)}
                      onChangeText={handlePasswordChange}
                      placeholder="Password"
                    />
                    <TouchableOpacity
                      style={styles.showPasswordButton}
                      onPress={toggleHidePassword}
                    >
                      <Text style={styles.showPasswordButtonText}>Show</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.submitButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Login")}
              >
                Already have an account? Sign In
              </Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default NewRegistration;
