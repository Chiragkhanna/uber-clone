import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp } from '../types';
import { useSelector } from 'react-redux';
import { selectOrigin, setDestination } from '../slices/navSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useAppDispatch } from '../hooks';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {

  const navigation = useNavigation<HomeScreenProp>();
  const origin = useSelector(selectOrigin);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex-shrink`}>
        <Text style={tw`text-center py-5 text-xl`}> Good Morning, Chirag</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
          <GooglePlacesAutocomplete
            debounce={400}
            placeholder='Where to?'
            nearbyPlacesAPI='GooglePlacesSearch'
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }} />
        </View>
        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex-row w-24 justify-between items-center bg-black py-3 px-4 rounded-full`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row w-24 justify-between py-3 px-4 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})
