import { View } from "react-native";
import { styles } from "../styles";
import CommonButton from "./CommonButton";

export default function SideMenu(props){
    return(
        <View style={props.isOpen ? styles.sideMenuOpened : styles.sideMenuClosed}>
            <CommonButton title={"1"} style={styles.sideMenuButton}></CommonButton>
            <CommonButton title={"2"} style={styles.sideMenuButton}></CommonButton>
            <CommonButton title={"3"} style={styles.sideMenuButton}></CommonButton>
        </View>
    );
}