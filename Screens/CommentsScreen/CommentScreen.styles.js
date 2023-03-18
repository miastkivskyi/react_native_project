import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  imageBox: {
    width: "100%",
    height: 240,
    marginTop: 32,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  image: {
    flex: 1,
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },

  list: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginVertical: 32,
    gap: 24,
  },

  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 10,
  },

  itemViev: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 50,
  },
  avatarBox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textBox: {
    width: "90%",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  comment: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    textAlign: "left",
  },
  commentContainer: {
    paddingBottom: 50,
  },

  spacer: {
    marginBottom: 65,
  },

  data: {
    color: "#BDBDBD",
    textAlign: "right",
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
  },
  inputBox: {
    flex: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 16,
    left: 0,
  },

  input: {
    width: "100%",
    height: 59,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 50,
    borderRadius: 100,
    color: "#212121",
    fontSize: 16,
  },
  btnSend: {
    position: "absolute",
    width: 34,
    height: 34,
    right: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
