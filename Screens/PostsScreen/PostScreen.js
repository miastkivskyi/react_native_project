import React, { useState, useEffect } from "react";
import styles from "./PostScreen.styles";
import { View, ScrollView, SafeAreaView } from "react-native";
import maps from "../../assets/data/maps";
import PostsCard from "../../components/PostsCard/PostsCard";
import UserCard from "../../components/UserCard/UserCard";

const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState(maps);

  useEffect(() => {
    route.params && setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  const mapView = (coordinate) => {
    navigation.navigate("Map", coordinate);
  };
  const commentView = (id, uri) => {
    navigation.navigate("Comments", { id, uri });
  };

  return (
    <SafeAreaView style={styles.containerPosts}>
      <ScrollView>
        <View style={styles.list}>
          <UserCard />
          {posts.map(({ id, name, address, coordinate, uri }) => (
            <PostsCard
              key={id}
              id={id}
              name={name}
              address={address}
              coordinate={coordinate}
              uri={uri}
              mapClick={mapView}
              commentClick={commentView}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsScreen;
