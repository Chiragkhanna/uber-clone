import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Point } from "react-native-google-places-autocomplete";

interface DistanceMatrixState {
    distance: {
        text: string;
        value: number;
    };
    duration: {
        text: string;
        value: number;
    };
    status: string;
};

// Define a type for the slice state
interface NavigationState {
    origin: { location: Point | undefined; description: string } | null;
    destination: { location: Point | undefined; description: string } | null;
    travelTimeInformation: DistanceMatrixState | null;
}

// Define the initial state using that type
const initialState: NavigationState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },

    },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInfo = (state: RootState) => state.nav.travelTimeInformation;

export default navSlice.reducer