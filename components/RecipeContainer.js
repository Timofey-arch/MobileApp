import { Image, View } from "react-native";
import { styles } from "../styles";
import CommonButton from "./CommonButton";

export default function RecipeContainer(){
    return(
        <View style={styles.recipeContainer}>
            <Image style={styles.recipeImage}></Image>
            <CommonButton title={"Learn More!"} style={styles.button}></CommonButton>
        </View>
    );
}