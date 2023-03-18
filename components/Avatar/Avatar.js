import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./Avatar.styles.js";

const Avatar = () => {
  return (
    <View style={styles.add}>
      <Image
        style={styles.image}
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1679875200&Signature=NSnQ6M13EA~GCLYNtycTHvETjg2fjEcNpfvLVUtS7s-xZSSxJW8iH94gdxfwrDGainhgY108DlILXKUa017D3pjArlXLnur~BZKf-tK0PaG-TTBxM~Vu2duVRZwigPCc1qNJL-HLDsXu3LEQylxpfctQlaJUjGljuc92MUfLf6ZHLaB5WJPWQUYK92CP1o7K4D13~xP6sabUZqsyTcYyHCd7ltdHXvhftMokr~wpGqw26Ps4Dh~DMbEaqNtD9Ec9UQA8h3RY-0IlmraZuqeIQEbM3~swkq0V135XslDsYQiYs1WHhYGS6EODzJaePzMJefL1Yzma~zsMKhgZj2SYbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
      />
      <TouchableOpacity style={styles.addBtn}>
        <Feather name="x" size={15} color="#E8E8E8" />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
