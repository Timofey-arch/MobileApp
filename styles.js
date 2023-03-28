import { StyleSheet , StatusBar , Dimensions} from "react-native";

let screen = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'green',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        elevation: 100,
        zIndex: 100,
    },

    mainContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    backgroundCircles: {
        borderRadius: 50,
        width: '50%',
        height: '50%',
        backgroundColor: 'red',
    },

    partOfMenuButton: {
        width: '90%',
        height: '10%',
        backgroundColor: 'white',
        margin: 4,
    },

    recipeContainer: {
        // flex: 1,
        width: "100%",
        height: 350,
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 60,
        borderRadius: 50,
        shadowColor: 'black'
    },

    button: {
        width: '50%',
        height: '10%',
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
        color: 'black',
        fontFamily: 'normal',
    },

    recipeImage: {
        width: '70%',
        height: '50%',
    },

    sideMenuClosed: {
        display: 'none',
    },

    sideMenuOpened : {
        position: 'absolute',
        top: '10%',
        width: '80%',
        height: '100%',
        backgroundColor: 'green',
        flexDirection: "column",
        justifyContent: "flex-start",
        elevation: 100,
        zIndex: 100,
    },

    sideMenuButton : {
        width: '80%',
        height: '8%',
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        color: 'black',
        fontFamily: 'normal',
    },

    menuButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: 50,
        height: 50,
    }
});