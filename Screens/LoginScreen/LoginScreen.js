import React, { useState } from "react";
import Container from "../../components/Container/Container";
import {
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./LoginScreen.styles.js";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [hidePassword, setHidePassword] = useState(true);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const toggleHidePassword = () => setHidePassword(!hidePassword);
  const showKeyboard = () => setIsKeyboardVisible(true);

  const handleEmailChange = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const handlePasswordChange = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
    setHidePassword(true);
    setState(INITIAL_STATE);
    navigation.navigate("Home");
  };

  const hideKeyboard = () => {
    setHidePassword(true);
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  };

  const { email, password } = state;

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Container>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.inputField}
                value={email}
                onChangeText={handleEmailChange}
                onFocus={showKeyboard}
                placeholder="E-mail address"
              />
              <View style={styles.passwordFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  secureTextEntry={hidePassword}
                  value={password}
                  onChangeText={handlePasswordChange}
                  onFocus={showKeyboard}
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
              <Text style={styles.submitButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.link,
              marginBottom: isKeyboardVisible ? 0 : 144,
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            Don't have an account? Sign Up
          </Text>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
