import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import Facebook from "./screens/Fb";
import Instagram from "./screens/In";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const tabNavigator = createBottomTabNavigator({
  Fb: { screen: Facebook },
  In: { screen: Instagram },
});

const AppContainer = createAppContainer(tabNavigator);
