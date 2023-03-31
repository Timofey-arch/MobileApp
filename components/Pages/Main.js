import { View, Text } from "react-native";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import MenuButton from "../MenuButton";
import { useState } from 'react';

export default function Main({ navigation }){
    const [sideMenustate, setSideMenuState] = useState(false);

    return(
        <>
            <NavBar>
                <MenuButton openFunction={() => setSideMenuState(sideMenustate ? false : true)}></MenuButton>
            </NavBar>

            <SideMenu isOpen={sideMenustate} navigation={navigation}>

            </SideMenu>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: "black "}}>Main</Text>
            </View>
        </>
    );
}