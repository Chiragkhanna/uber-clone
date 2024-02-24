import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Icon, Button} from "react-native-elements";
import DriverCard from "./card/DriverCard";
import NoteCard from "./card/NoteCard";
import ActionButtonGroup from "./ActionButtonGroup";

const PickUpCard = () => {
    const randomPickupTime = Math.floor(Math.random() * 20);
  const ride = {
    ride: [{id:111}],
    currentRate: 345
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <ScrollView>
          <View style={tw`p-2 px-4 m-0`}>
            <View style={tw`flex flex-row justify-between items-center  border-b border-gray-100 p-2 `}>
              <Text style={[tw`text-lg text-gray-800 `]}>Meet By Pickup</Text>
              <View style={tw`flex bg-blue-600 w-12 h-12 p-2 ml-2`}>
                <Text style={tw`text-lg text-white m-auto mb-1`}>{randomPickupTime}</Text>
                <Text style={tw`text-lg text-white  m-auto`}>min</Text>
              </View>
            </View>
            <DriverCard />
            <NoteCard />
          </View>
          <View style={tw`mt-2 mx-0 px-0 pb-0`}>
            <View style={tw`px-4`}>
              <View style={tw`flex flex-row  justify-between border-b border-gray-100 py-4`}>
                <Icon type="ionicon" name="location" />
                <View style={tw`ml-4`}>
                  <Text style={[tw`text-gray-600 text-sm`]}>Pick Up Location</Text>
                  <Text style={[tw`text-gray-500 text-xs`]}>12:00 AM dropoff</Text>
                </View>
                <Text style={tw`flex-1 text-right  text-blue-500`}>Add or Change</Text>
              </View>

              <View style={tw`flex flex-row justify-between border-b border-gray-100 py-4`}>
                <Icon type="ionicon" name="person" />

                <View style={tw`ml-4`}>
                  <Text style={[tw`text-gray-600 text-sm`]}>{ride?.currentRate}</Text>
                  <Text style={[tw`text-gray-500 text-xs`]}> Visa XXXX.1234</Text>
                </View>
                <Text style={tw`flex-1 text-right text-blue-500`}>Switch</Text>
              </View>

              <View style={tw`flex flex-row justify-between border-b border-gray-100 py-4`}>
                <Icon type="octicon" name="broadcast" />
                <View style={tw`ml-4`}>
                  <Text style={[tw`text-gray-600 text-sm`]}>Riding with someone?</Text>
                </View>
                <Text style={tw`flex-1 text-right text-blue-500`}>Split Fare</Text>
              </View>

              <View style={tw`flex flex-row justify-between border-b border-gray-100 py-4`}>
                <Icon type="material" name="mobile-screen-share" />
                <View style={tw`ml-4`}>
                  <Text style={[tw`text-gray-600 text-sm`]}>Share trip status</Text>
                </View>
                <Text style={tw`flex-1 text-right text-blue-500`}>Share</Text>
              </View>
            </View>
            <ActionButtonGroup />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default PickUpCard;
