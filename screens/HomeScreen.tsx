import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
// import tw from "tailwind-react-native-classnames";
// import NavOptions from "../components/NavOptions";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SliderTop from "../components/SliderTop";
import TripType from "../components/TripType";
import { useDispatch } from "react-redux";
import {
  setOrigin,
  setDestination,
  selectOrigin,
  selectDestination,
} from "../slice/DistanceMesure";
import { useSelector } from "react-redux";
// import NavFavourites from "../components/NavFavourites";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  // const origin = useSelector(selectOrigin);
  // const destination = useSelector(selectDestination);
  // const origin = useSelector((state: RootState) => state.distancemesure.origin);
  // const destination = useSelector(
  //   (state: RootState) => state.distancemesure.destination
  // );
  // console.log(origin);
  // console.log(destination);

  return (
    <View style={tw`bg-white h-full pt-5`}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <View style={tw`p-5`}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0, backgroundColor: "white" },
            textInput: {
              fontSize: 18,
              borderRadius: 5,
              backgroundColor: "lightgray",
            },
            textInputContainer: {
              paddingBottom: 0,
            },
          }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          onPress={(data, details = null) => {
            // console.log(details?.geometry);

            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(
              setDestination({
                location: {
                  lat: 30.0581,
                  lng: 31.2289,
                },
              })
            );
            // dispatch(setDestination(null));
          }}
          fetchDetails={true}
          //   returnKeyType={"search"}
          query={{
            key: process.env.GOOGLE_MAP_API,
            language: "en",
          }}
          enablePoweredByContainer={false}
        />
        <SliderTop />
        <TripType />
        {/* Element navigation */}
      </View>
    </View>
  );
};

export default HomeScreen;
