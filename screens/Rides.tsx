import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";
import { Marker } from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";

import { RootTabScreenProps } from "../types";
import { SimpleLineIcons } from "@expo/vector-icons";

import LocationSelection from "../components/LocationSelection";
import MapContainer from "../components/Mapview";
import { DrawerActions } from "@react-navigation/native";
import RidesOptions from "../components/RidesOptions";

//
export default function Rides({ navigation }: RootTabScreenProps<"Rides">) {
  const Toogler = () => navigation.dispatch(DrawerActions.toggleDrawer());
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={tw`absolute z-50 top-16 left-5 bg-gray-100 rounded-full shadow-lg p-3`}
        onPress={Toogler}
      >
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <MapContainer />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="LocationSelection"
            component={LocationSelection}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RidesOptions"
            component={RidesOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
