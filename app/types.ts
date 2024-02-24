
import { Point } from "react-native-google-places-autocomplete";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  EatsScreen: undefined;
  RideOptionsCard: undefined;
};

export type MapScreenStackList = {
  goBack(): void;
  navigate(arg0: string): void;
  NavigateCard: undefined;
  RideOptionsCard: undefined;
  PickUpCard: undefined;
  PickUpTime: undefined;
  FindingCard: undefined;
};

export type HomeScreenProp = NativeStackNavigationProp<StackList, "HomeScreen">;

export type NavOptionProps = {
  id: string
  title: string
  image: string
  screen: string
}

export type FavoritesDataProp = {
  id: string;
  name: string;
  icon: string;
  location: Point;
  description: string;
};