import { View, Text } from "react-native";

export default function Home(){
    return(
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Marketplaces to buy food</Text>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />  
            </View>
        </>
    );
}