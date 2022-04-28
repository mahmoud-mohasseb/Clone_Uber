import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DistanceMesureState {
  origin: object;
  destination: object;
  travelTimeInformation: object;
}

const initialState: DistanceMesureState = {
  origin: {
    location: {
      latitude: 10.828315624028688,
      longitude: 106.77810365732711,
    },
    description: "Vinhome",
  },
  destination: {
    location: {
      latitude: 10.792459356405814,
      longitude: 106.76095244012551,
    },
    description: "Na's house",
  },
  travelTimeInformation: {
    distance: {
      text: "15 kilometers",
    },
    duration: {
      text: "25 minutes",
      value: "1500000",
    },
  },
};

export const DistanceMesureSlice = createSlice({
  name: "DistanceMesure",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<object>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  DistanceMesureSlice.actions;

//output of selected frontcomponent to use it in different component

export const selectOrigin = (state: any) => state.distancemesure.origin;

export const selectDestination = (state: any) =>
  state.distancemesure.destination;

export const selectTravelTimeInformation = (state: any) =>
  state.distancemesure.travelTimeInformation;

export default DistanceMesureSlice.reducer;
