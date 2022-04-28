import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useRef, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { RootState } from "../store";

import { useDispatch, useSelector } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  setTravelTimeInformation,
} from "../slice/DistanceMesure";

const MapContainer = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const dispatch = useDispatch();

  const mapRef = useRef(null);
  const latitude = origin.location.lat;
  const longitude = origin.location.lng;
  const deslatitude = destination.location.lat;
  const deslongitude = destination.location.lng;

  const originDirection = { latitude: latitude, longitude: longitude };
  const destinationDirection = {
    latitude: deslatitude,
    longitude: deslongitude,
  };

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      const from = origin.description;
      const to = destination.description;
      const API_KEY = process.env.GOOGLE_MAP_API;
      const queryURL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${from}%2C%20DC&destinations=${to}&units=imperial&key=${API_KEY}`;
      await fetch(queryURL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination]);

  return (
    <View>
      <MapView
        zoomEnabled
        maxZoomLevel={40}
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          // latitude: origin.location.lat,
          // longitude: origin.location.lng,
          latitude: latitude,
          longitude: longitude,
          //2 parameter below to zoom in out
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {/* <Marker coordinate={{ latitude: 30.006218, longitude: 31.478295 }}>
        <Image
         style={{ width: 46, height: 48 }}
         resizeMode="contain"
         source={{
         uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
           }}
            />
        </Marker> */}

        {origin && (
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          >
            <Image
              style={{ width: 46, height: 48 }}
              resizeMode="contain"
              source={{
                uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
              }}
            />
          </Marker>
        )}

        {destination && (
          <Marker
            title="Destination"
            description={destination.desc}
            identifier="destination"
            coordinate={{
              latitude: deslatitude,
              longitude: deslongitude,
            }}
          >
            <Image
              style={{ width: 46, height: 48 }}
              resizeMode="contain"
              source={{
                uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
              }}
            />
          </Marker>
        )}

        {origin && destination && (
          <MapViewDirections
            origin={originDirection}
            destination={destinationDirection}
            apikey=process.env.GOOGLE_MAP_API
            strokeWidth={4}
            strokeColor="black"
            optimizeWaypoints={true}
          />
        )}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapContainer;
