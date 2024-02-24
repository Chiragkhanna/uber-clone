import React, { JSXElementConstructor } from "react";
import { Text } from "react-native";
import { ButtonGroup } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { MapScreenStackList } from "../types";
import { useNavigation } from "@react-navigation/native";

const component1 = () => <Text style={tw`text-red-600`}>Cancel</Text>;
const component2 = () => <Text style={tw`text-blue-600`}>Safety</Text>;
// @ts-ignore
const buttons: (React.ReactElement<{}, JSXElementConstructor<any>>)[] = [{ element: component1 }, { element: component2 }];

const ActionButtonGroup = () => {
    const navigation = useNavigation<MapScreenStackList>();

    return <ButtonGroup selectedIndex={-1} buttons={buttons} containerStyle={tw`m-0`} onPress={() => {
        navigation.navigate("HomeScreen")
    }} />;
};

export default ActionButtonGroup;