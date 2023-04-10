import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/auth/selectors";

import Comments from "./Screens/CommentScreen/Comments";
import Login from "./Screens/Auth/Login";
import Registr from "./Screens/Auth/Registration";
import React from "react";
import Map from "./Screens/MapScreen/Map";
import Home from "./Screens/Home";

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Registr"
        component={Registr}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppStack.Group
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#BDBDBD",
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
            color: "#212121",
          },
          headerTitleAlign: "center",
        }}
      >
        <AppStack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: true }}
        />
        <AppStack.Screen
          name="Comments"
          component={Comments}
          options={{ headerShown: true }}
        />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};

const Router = () => {
  const { userId } = useSelector(selectUser);
  return <>{userId ? <MainNavigator /> : <AppNavigator />}</>;
};

export default Router;
