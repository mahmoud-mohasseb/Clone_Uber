import { View, Text, FlatList, TouchableOpacity } from "react-native";

import React from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "./Data";

const TripType = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
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
    </View>
  );
};

export default TripType;
