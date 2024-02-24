import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { toTitleCase } from "../../utils/Helper";

const DriverCard = () => {
  const driver = {
    rating: 4.23,
    name: 'Ashok',
    avatar: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=120',
    license_plate: 'DL 1XX 1234',
    vehicle: {
        color: 'White',
        model: 'Swift Dzire',
        make: 2020
    }

  };
  return (
    <View style={tw`flex flex-row items-center justify-between px-2 pb-6`}>
      {/* ---------- LEFT ----------  */}
      <View style={tw`flex-1`}>
        <View style={tw`relative`}>
        <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://links.papareact.com/5w8",
              }}
            />
        </View>
        <View style={tw`absolute top-9 -left-2`}>
          {/* driver avatar */}
          <Avatar containerStyle={tw`border-2 border-white rounded-full`} size={48} rounded source={{ uri: driver?.avatar }} />

          {/* driver floating rating */}
          <View style={tw` flex flex-row justify-around items-center border rounded-lg border-gray-100 bg-white shadow w-16 -mt-2 py-0  px-2`}>
            <Text style={tw`text-xs`}>{driver?.rating}</Text>
            <Icon style={tw`text-xl p-0`} type="ionicon" name="star" size={12} />
          </View>

          {/* driver name */}
          <View style={tw`flex flex-row items-center mt-2`}>
            <Icon type="font-awesome-5" name="user-check" color="#5073C5" size={10} />
            <Text style={[tw`text-sm ml-1`, { color: "#5073C5"}]}>{driver?.name}</Text>
          </View>
        </View>
      </View>
      {/* ---------- RIGHT ----------  */}
      <View style={tw`flex flex-1 justify-center text-left`}>
        <Text style={tw`font-bold text-black text-right`}>{driver?.license_plate}</Text>
        <Text style={tw`text-sm text-right text-gray-600`}>{toTitleCase(driver?.vehicle?.color, driver?.vehicle?.make, driver?.vehicle?.model)}</Text>
      </View>
    </View>
  );
};

export default DriverCard;
