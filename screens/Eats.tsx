import { StyleSheet, Dimensions, View, Text, Button } from "react-native";

import tw from "twrnc";

import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Restaurants from "../components/restaurants";
import {
  increment,
  decrement,
  changethename,
  divider,
} from "../slice/DistanceMesure";
import { RootState } from "../store";

// import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  // intial state
  // const count = useSelector((state: RootState) => state.distancemesure.value);
  // const count2 = useSelector((state: RootState) => state.distancemesure.value2);
  // const changename = useSelector(
  //   (state: RootState) => state.distancemesure.text
  // );
  // const divide = useSelector(
  //   (state: RootState) => state.distancemesure.valuedivided
  // );

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Restaurants />
      {/* <Text>{count}</Text>
      <Text>{count2}</Text>
      <Text>{changename}</Text>
      <Text>{divide}</Text>
      <Button title="increament" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="changename"
        onPress={() => dispatch(changethename("hey"))}
      />
      <Button
        title="divider"
        onPress={() => dispatch(divider(count / count2))}
      /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
