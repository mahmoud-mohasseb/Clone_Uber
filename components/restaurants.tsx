import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import RestaurantsData from "./RestaurantsData";
import Restuarntchild from "./restuarntchild";
import { SafeAreaView } from "react-native-safe-area-context";

const Restaurants = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={RestaurantsData}
        renderItem={({ item }) => (
          <View style={tw`m-2`}>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.restitle}</Text>
            <Restuarntchild />
          </View>
          //   <TouchableOpacity style={tw`pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          //     <View>
          //       <Image
          //         source={{ uri: item.image }}
          //         style={{ width: 120, height: 120, resizeMode: "contain" }}
          //       />
          //       <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          //       {/* <Text style={tw`mt-2 text-lg font-semibold`}>
          //         {item.description}
          //       </Text> */}
          //     </View>
          //   </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Restaurants;
