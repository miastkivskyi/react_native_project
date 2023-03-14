import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  formContainer: {
    width: "100%",
  },
  formTitle: {
    textAlign: "center",
    color: "#212121",
    marginVertical: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  inputBlock: {
    gap: 16,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 8,
    color: "#212121",
  },
  passwordFieldContainer: {
    position: "relative",
    justifyContent: "center",
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
  },
  showPasswordButtonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  submitButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default styles;
