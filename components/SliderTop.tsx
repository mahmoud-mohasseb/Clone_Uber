import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
// import { dataList } from "../types";
// import { Icon } from "react-native-elements/dist/icons/Icon";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Rides",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eats",
  },
];

const SliderTop = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 120, height: 120, resizeMode: "contain" }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <View style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-2`}>
                <AntDesign name="arrowright" size={24} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SliderTop;
