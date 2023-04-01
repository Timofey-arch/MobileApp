import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";
import CommonButton from "./CommonButton";

export default function SideMenu(props){
    return(
        <View style={props.isOpen ? styles.sideMenuOpened : styles.sideMenuClosed}>

            <Pressable style={styles.profileButton} onPress={() => props.navigation.push('Profile')}>
                <Text style={{color: 'black'}}>Profile</Text>
            </Pressable>

            <CommonButton 
                title={"Main"} 
                style={styles.sideMenuButton} 
                onClick={() => props.navigation.push('Main')}>
            </CommonButton>

            <CommonButton 
                title={"Home"} 
                style={styles.sideMenuButton} 
                onClick={() => props.navigation.push('Home')}>
            </CommonButton>
            
            <CommonButton
                title={"Recipies Book"} 
                style={styles.sideMenuButton} 
                onClick={() => props.navigation.push('Recipies Book')}>
            </CommonButton>
        </View>
    );
}