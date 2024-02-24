import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapScreenStackList } from "../types";

const FindingCard = () => {
  const navigation = useNavigation<MapScreenStackList>();
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    })
      .start(() => {
        Animated.timing(progress, {
          toValue: 350,
          duration: 500,
          useNativeDriver: false,
        }).start(() => navigation.navigate("PickUpCard"));
      })
  }, []);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex flex-row justify-between mt-20 mx-5`}>
        <Animated.View style={[styles.bar, { width: progress }]} />
      </View>
      <View style={tw`mt-auto`}>
        <Text style={tw`text-center text-blue-500`}> Finding driver for you.</Text>
      </View>
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw.style(
            `bg-black py-3 m-3`
          )} onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={tw`text-center text-white text-lg`}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FindingCard;

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
  }
});
