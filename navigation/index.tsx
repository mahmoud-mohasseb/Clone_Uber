/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Rides from "../screens/Rides";
import Eats from "../screens/Eats";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import tw from "twrnc";
import DrawerTab from "./Drawer";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rides"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Eats"
        component={Eats}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="DrawerTab"
        component={DrawerTab}
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Rides"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {/*  */}
      <BottomTab.Screen
        name="DrawerTab"
        component={DrawerTab}
        // component={MyDrawer}
        options={({ navigation }: RootTabScreenProps<"DrawerTab">) => ({
          title: "Rides",
          tabBarIcon: ({ color }) => (
            <View style={tw`flex-row bg-black p-2 pl-5 pr-5 rounded-2xl`}>
              <FontAwesome5
                style={tw`flex-row bg-black`}
                name="car"
                size={24}
                color="white"
              />
              <Text style={tw`text-white font-semibold mt-1 ml-2`}>Rides</Text>
            </View>
          ),

          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={24}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Eats"
        component={Eats}
        options={{
          title: "Eats",
          tabBarIcon: ({ color }) => (
            <View
              style={tw`flex-row bg-neutral-200 p-2 pl-5 pr-5  rounded-2xl`}
            >
              <Ionicons
                style={tw`flex-row`}
                name="fast-food"
                size={24}
                color="black"
              />
              <Text style={tw`text-black font-semibold mt-1 ml-2`}>Eats</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
