import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/store";
import Watcher from "./helpers/Watcher";
import { useFont } from "./helpers/hooks";

const App = () => {
  const isReady = useFont();
  if (isReady) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router />
          <Watcher />
        </NavigationContainer>
      </Provider>
    );
  } else return null;
};

export default App;
