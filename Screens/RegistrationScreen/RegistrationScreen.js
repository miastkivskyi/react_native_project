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
  Alert,
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
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const toggleHidePassword = () => setHidePassword(!hidePassword);

  const loginHandler = (value) =>
    setstate((prevState) => ({ ...prevState, login: value }));
  const emailHandler = (value) =>
    setstate((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setstate((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    Alert.alert("Sign Up", `${login}, ${email}, ${password}`);
    setstate(INITIAL_STATE);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
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
            <View style={styles.box}>
              <View style={styles.add}>
                <TouchableOpacity style={styles.addBtn}>
                  <Image
                    style={styles.addIcon}
                    source={require("../../assets/images/plus.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.form}>
                <Text style={styles.formTitle}>Registration</Text>
                <View style={styles.inputBlock}>
                  <TextInput
                    style={styles.input}
                    value={login}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={loginHandler}
                    placeholder="Login"
                  />
                  <TextInput
                    style={styles.input}
                    value={email}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={emailHandler}
                    placeholder="E-mail address"
                  />
                  <View style={styles.passwordField}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={hidePassword}
                      value={password}
                      onFocus={() => setIsShowKeyboard(true)}
                      onChangeText={passwordHandler}
                      placeholder="Password"
                    />
                    <TouchableOpacity
                      style={styles.showBtn}
                      onPress={toggleHidePassword}
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
                  <Text style={styles.btnTitle}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={styles.limk}
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
