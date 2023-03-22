import { StyleSheet , StatusBar } from "react-native";

export const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'green',
        position: 'relative',
        top: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        elevation: 2,
        zIndex: 2,
    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center'
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
        width: 400,
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
        top: '13.6%',
        width: '80%',
        height: '100%',
        backgroundColor: 'green',
        flexDirection: "column",
        justifyContent: "flex-start",
        elevation: 3,
    },

    sideMenuButton : {
        width: '80%',
        height: '8%',
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
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