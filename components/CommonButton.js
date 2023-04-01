import { Pressable, Text } from "react-native";

export default function CommonButton(props){
    return(
        <Pressable style={props.style} onPress={props.onClick}>
            <Text style={{color: 'black', fontSize: 20}}>{props.title}</Text>
        </Pressable>
    );
}
