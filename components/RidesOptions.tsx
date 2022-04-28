import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { RootState } from "../store";
import React, { useState } from "react";
import RidesData from "./RidesData";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { selectTravelTimeInformation } from "../slice/DistanceMesure";
import { useSelector } from "react-redux";

const RidesOptions = () => {
  const [selected, setSelected] = useState<any>();
  const navigation = useNavigation<any>();
  const timeInformation = useSelector(selectTravelTimeInformation);
  console.log(selected?.id);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row border-gray-100`}>
        <TouchableOpacity
          style={tw`top-2 left-6`}
          onPress={() => navigation.navigate("LocationSelection")}
        >
          <Entypo name="chevron-with-circle-left" size={35} color="black" />
        </TouchableOpacity>

        <Text style={tw`absolute ml-20 py-3 text-xl`}>
          Select a Ride - {timeInformation?.distance?.text}
          {/* Select a Ride - {timeInformation?.distance?.text} */}
        </Text>
      </View>
      <View style={[tw`bg-gray-200 m-4`, { height: 1 }]} />

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={RidesData}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 1 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-5`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl ml-4 font-semibold`}>{item.title}</Text>
              <Text style={tw`ml-4`}>
                {timeInformation?.duration?.text} Travel time
              </Text>
            </View>

            {timeInformation?.duration?.value ? (
              <Text style={tw`text-lg mr-6`}>
                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */}
                {new Intl.NumberFormat("ro-Ro", {
                  style: "currency",
                  currency: "Ron",
                }).format(
                  (timeInformation?.duration?.value * 1.5 * item.multiplier) /
                    100
                )}
              </Text>
            ) : (
              <Text style={tw`text-xl`}>0 Ron</Text>
            )}
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected?.id}
          style={tw`bg-gray-300 py-3 m-3 ${selected?.id && "bg-black"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RidesOptions;
