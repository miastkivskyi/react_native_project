import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import styles from "./LoginScreen.styles.js";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const togglePasswordHidden = () => setIsPasswordHidden(!isPasswordHidden);
  const toggleKeyboardShown = () => setIsKeyboardShown(true);

  const handleEmailChange = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const handlePasswordChange = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
    setIsPasswordHidden(true);
    Alert.alert("Sign In", `${email}, ${password}`);
    setState(INITIAL_STATE);
  };

  const hideKeyboard = () => {
    setIsPasswordHidden(true);
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const { height, width } = Dimensions.get("window");
  const { email, password } = state;
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
            <View
              style={{
                ...styles.box,
                paddingBottom: isKeyboardShown ? 80 : 144,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}>Login</Text>
                <View style={styles.inputBlock}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                    onFocus={toggleKeyboardShown}
                    placeholder="E-mail address"
                  />
                  <View style={styles.passwordField}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={isPasswordHidden}
                      value={password}
                      onChangeText={handlePasswordChange}
                      onFocus={toggleKeyboardShown}
                      placeholder="Password"
                    />
                    <TouchableOpacity
                      style={styles.showBtn}
                      onPress={togglePasswordHidden}
                    >
                      <Text style={styles.showBtnTitle}>Show</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnTitle}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={styles.limk}
                onPress={() => navigation.navigate("Registration")}
              >
                Don't have an account? Sign Up
              </Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
