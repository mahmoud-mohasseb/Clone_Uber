import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import RestaurantsData from "./RestaurantsData";
import tw from "twrnc";

const Restuarntchild = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={RestaurantsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`bg-gray-200 m-3 w-40 rounded-lg`}>
            <View>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 157,
                  height: 120,
                  resizeMode: "stretch",
                  borderRadius: 10,
                }}
              />
              <Text style={tw`m-2 text-sm font-bold text-slate-400`}>
                {item.title}
              </Text>
              <Text style={tw`m-2 text-sm`}>
                {item.description.slice(0, 20)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Restuarntchild;
