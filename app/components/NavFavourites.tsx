import { FlatList, Text, TouchableOpacity, View, ListRenderItemInfo } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { FavoritesDataProp, HomeScreenProp } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';

const data = [
  {
    id: "123",
    icon: "home",
    name: "Home",
    location: { lat: 28.703418, lng: 77.13207 },
    description: "Rohini, Delhi, India"
  },
  {
    id: "456",
    icon: "briefcase",
    name: "Work",
    location: { lat: 28.494976, lng: 77.089542 },
    description: "CyberHub, Gurugram, Haryana, India"
  }
]

interface NavFavouritesProps { shouldSetOrigin?: boolean }

const NavFavourites = ({ shouldSetOrigin }: NavFavouritesProps) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <FlatList
      data={data.filter(
        // Checks to see if Home or Work is already selected
        (item) => shouldSetOrigin || origin?.location !== item.location
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { name, icon, location, description } }: ListRenderItemInfo<FavoritesDataProp>) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            if (shouldSetOrigin) {
              dispatch(
                setOrigin({
                  location,
                  description,
                })
              );
              navigation.navigate("MapScreen");
            } else {
              dispatch(
                setDestination({
                  location,
                  description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-bold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavFavourites;
