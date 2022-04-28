import * as React from "react";
import {
  Button,
  View,
  ColorSchemeName,
  Text,
  useWindowDimensions,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActionType, useNavigation } from "@react-navigation/native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import "react-native-gesture-handler";
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/Eats";
import Rides from "../screens/Rides";
import { DrawerParamList } from "../types";
import { FontAwesome5 } from "@expo/vector-icons";

import tw from "twrnc";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerTab() {
  const dimensions = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        drawerPosition: "right",
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: "slide",
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
        drawerStyle: {
          backgroundColor: "lightgray",
          width: 250,
        },
      }}
    >
      <Drawer.Screen
        options={() => ({
          title: "Home",
          drawerIcon: () => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        })}
        name="Home"
        component={HomeScreen}
      />

      <Drawer.Screen
        options={{
          drawerLabel: "Rides",
          drawerIcon: () => <FontAwesome5 name="car" size={24} color="black" />,
        }}
        name="Rides"
        component={Rides}
      />
    </Drawer.Navigator>
  );
}
