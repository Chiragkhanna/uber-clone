import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreenProp, MapScreenStackList } from '../types';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import PickUpCard from '../components/PickUpCard';
import PickUpTime from '../components/PickUpTime';
import FindingCard from '../components/FindingCard';

const MapScreen = () => {

  const Stack = createNativeStackNavigator<MapScreenStackList>();
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="PickUpTime"
            component={PickUpTime}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="FindingCard"
            component={FindingCard}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="PickUpCard"
            component={PickUpCard}
            options={{
              headerShown: false
            }} />


        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
