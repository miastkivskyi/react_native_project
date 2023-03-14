import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Home from "./Screens/HomeScreen/Home";
import Registration from "./Screens/RegistrationScreen/RegistrationScreen";
import Login from "./Screens/LoginScreen/LoginScreen";

const MainStack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  if (!isReady) return null;

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
