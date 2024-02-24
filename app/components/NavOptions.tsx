import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ListRenderItemInfo } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp, NavOptionProps } from '../types';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export const data = [
    {
        id: "3",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "4",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }]

const NavOptions = () => {

    const navigation = useNavigation<HomeScreenProp>();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList<NavOptionProps>
            data={data}
            horizontal
            keyExtractor={(item: NavOptionProps) => item.id}
            renderItem={({ item }: ListRenderItemInfo<NavOptionProps>) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    onPress={() => navigation.navigate('HomeScreen')}
                    disabled={!origin}
                >
                    <View style={tw` ${!origin ? "opacity-20" : ""} `}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                    </View>
                    <Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        type="antdesign"
                        name="arrowright"
                        color="white"
                    />
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;
