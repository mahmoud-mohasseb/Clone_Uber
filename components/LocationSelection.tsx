import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "./Data";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slice/DistanceMesure";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const LocationSelection = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<any>();
  const [greet, setgreet] = useState("");

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) setgreet("Good Morning");
    else if (hrs >= 12 && hrs <= 17) setgreet("Good Afternoon");
    else if (hrs >= 17 && hrs <= 24) setgreet("Good Evening");
  }, []);

  //create function does calculation
  return (
    <SafeAreaView style={tw`bg-white`}>
      <Text style={tw`font-semibold text-center text-lg mt-4`}>
        {greet}, Mahmoud
      </Text>
      <View style={[tw`bg-gray-200 m-2`, { height: 1 }]} />
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          },
          textInput: {
            fontSize: 23,
            borderRadius: 5,
            width: 200,
            backgroundColor: "lightgray",
          },
          textInputContainer: {
            paddingBottom: 0,
          },
        }}
        placeholder="Where To?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        minLength={2}
        onPress={(data, details: any) => {
          console.log(details.geometry.location);
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          navigation.navigate("RidesOptions");
        }}
        fetchDetails={true}
        query={{
          key: process.env.GOOGLE_MAP_API,
          language: "en",
        }}
        enablePoweredByContainer={false}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center p-5`}
            onPress={() => navigation.navigate("RidesOptions")}
          >
            <View style={tw`mr-4 rounded-full bg-gray-300 p-5`}>
              <FontAwesome5 name={item.icon} size={24} color="black" />
            </View>
            <View>
              <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
              <Text style={tw`text-neutral-400`}>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default LocationSelection;
