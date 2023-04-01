import { Image, View } from "react-native";
import { styles } from "../styles";

export default function RecipeContainer(props){
    return(
        <View style={styles.recipeContainer}>
            {props.children}
        </View>
    );
}