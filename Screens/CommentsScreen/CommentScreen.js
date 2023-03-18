import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./CommentScreen.styles.js";

const CommentsScreen = ({
  navigation,
  route: {
    params: { id, uri },
  },
}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (text) => {
    setNewComment(text);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }
    const index = comments.length;
    setComments([...comments, { text: newComment.trim(), index }]);
    setNewComment("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{ uri }} />
      </View>
      <View style={styles.commentContainer}>
        <ScrollView style={styles.list}>
          <View style={styles.item}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={require("../../assets/images/Ellipse.jpg")}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.comment}>
                Really love your most recent photo. Ive been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.data}>
                {new Date().getDate().toString().padStart(2, "0")}{" "}
                {new Date().toLocaleString("default", { month: "long" })},{" "}
                {new Date().getFullYear()} |{" "}
                {new Date().getHours().toString().padStart(2, "0")}:
                {new Date().getMinutes().toString().padStart(2, "0")}
              </Text>
            </View>
          </View>
          {comments.map((comment) => (
            <TouchableOpacity key={comment.index}>
              <View style={styles.item}>
                <View style={styles.avatarBox}>
                  <Image
                    style={styles.avatar}
                    source={require("../../assets/images/Ellipse.jpg")}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.comment} key={comment.index}>
                    {comment.text}
                  </Text>
                  <Text style={styles.data}>
                    {new Date().getDate().toString().padStart(2, "0")}{" "}
                    {new Date().toLocaleString("default", { month: "long" })},{" "}
                    {new Date().getFullYear()} |{" "}
                    {new Date().getHours().toString().padStart(2, "0")}:
                    {new Date().getMinutes().toString().padStart(2, "0")}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={styles.spacer} />
        </ScrollView>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          placeholder="Comment..."
          value={newComment}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnSend}
          onPress={handleAddComment}
        >
          <Feather name="arrow-up" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CommentsScreen;
