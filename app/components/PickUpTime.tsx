import React from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapScreenStackList } from "../types";

const PickUpTime = () => {
  const navigation = useNavigation<MapScreenStackList>();

  const datalist = [
    {
      id: "1",
      icon: {
        type: "font-awesome",
        name: "hourglass-1",
        size: 24,
      },
      text: "Extra wait time included to meet your ride",
    },
    {
      id: "2",
      icon: {
        type: "font-awesome-5",
        name: "calendar-day",
        size: 24,
      },
      text: "Choose your pickup time up to 30 days",
    },
    {
      id: "3",
      icon: {
        type: "font-awesome",
        name: "credit-card-alt",
        size: 18,
      },
      text: "Cancel at no charge up to 60 minutes in advance",
    },
  ];

  const Header = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-1 left-0 px-5 rounded-full`}
        >
          <Icon
            name={Platform.OS === "ios" ? "ios-chevron-back" : "arrowleft"}
            type="antdesign"
          />
        </TouchableOpacity>
        <View style={[tw`px-4 mb-4`]}>
        <Text style={tw`text-center mb-5 text-lg`}>When do you want to be picked up?</Text>
          <View style={tw`flex items-center mb-6`}>
            <Text style={[tw`text-xl text-gray-800 `]}>Sun Jan 21</Text>
            <View style={[tw`border-b border-gray-200 h-1 my-4 w-full `]}></View>
            <Text style={[tw`text-2xl text-gray-800`]}>10:30 am</Text>
          </View>
          <Text style={[tw`font-semibold`]}>Added flexibility if you book 2 hours ahead</Text>
        </View>
      </View>
    );
  };

  const RenderItem = ({ item }: any) => {
    const isNotLastItem = +(item?.id || 3) !== datalist.length;
    return (
      <View style={tw`flex flex-row items-center p-2 px-6`}>
        <Icon type={item?.icon?.type} name={item?.icon?.name} size={item.icon.size} />
        <Text style={[tw`text-lg text-gray-700 ${isNotLastItem ? "border-b border-gray-200" : ""} pb-2 ml-6`, { fontSize: 16, lineHeight: 24 }]}>{item?.text}</Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={tw`p-4 `}>
        <Text style={tw`font-bold underline p-6`}>See Terms</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={datalist}
        keyExtractor={(item) => item.id}
        renderItem={(item) => RenderItem(item)}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw.style(
            `bg-black py-3 m-3`
          )} onPress={() => navigation.navigate("FindingCard")}
        >
          <Text style={tw`text-center text-white text-lg`}>
          Set pickup time
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickUpTime;
