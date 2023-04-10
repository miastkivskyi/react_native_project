import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableOpacity } from "react-native";
import { selectPrestate } from "../../redux/initialState/selectors";
import { selectImage, updateImage } from "../../helpers/ImagePicker";
import { delPhoto } from "../../redux/initialState/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserPhoto.styles.js";

const UserPhoto = () => {
  const dispatch = useDispatch();
  const { userId, photoURL } = useSelector(selectUser);
  const { uri } = useSelector(selectPrestate);
  const avatarURL = photoURL || uri;

  const imageSelection = () => {
    if (!avatarURL && !userId) return selectImage(dispatch);
    if (uri) return dispatch(delPhoto(uri));
    updateImage(dispatch, photoURL);
  };

  return (
    <View style={styles.add}>
      {avatarURL && <Image style={styles.avatar} source={{ uri: avatarURL }} />}
      <TouchableOpacity
        style={{
          ...styles.btnAdd,
          backgroundColor: avatarURL ? "#FFFFFF" : "inherit",
          borderColor: avatarURL ? "#BDBDBD" : "#FF6C00",
        }}
        onPress={imageSelection}
      >
        <Feather
          name={avatarURL ? "x" : "plus"}
          size={13}
          color={avatarURL ? "#BDBDBD" : "#FF6C00"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserPhoto;
