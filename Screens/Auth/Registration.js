import React from "react";
import Container from "../../components/Container/Container";
import UserPhoto from "../../components/UserPhoto/UserPhoto";
import Loader from "../../components/Loader";
import { useKeyboard } from "../../helpers/hooks";
import styles from "../../components/AuthForm/AuthForm.styles";
import AuthForm from "../../components/AuthForm/AuthForm";
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";

const Registr = ({ navigation }) => {
  const { marginСompensator } = useKeyboard(78);
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <>
      <Loader />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <Container>
            <UserPhoto />
            <AuthForm type={"registr"} />
            <Animated.Text
              style={{ ...styles.link, ...marginСompensator }}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an account? Sign In
            </Animated.Text>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Registr;
