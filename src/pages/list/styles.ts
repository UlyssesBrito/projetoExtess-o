import { StyleSheet,Dimensions } from "react-native";
import {themas} from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        height: (Dimensions.get("window").height / 6),
        backgroundColor: themas.colors.blue400,
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    introText: {
        color: themas.colors.secondary,
        fontSize: 20,
        fontWeight: 900,
        marginTop: 30,
        textAlign: "center",
    },

    boxList: {
        flex: 1
    },

    taskList: {
        padding: 20,
        flex: 1,
        marginTop: 40,
    },

    task: {
        backgroundColor: themas.colors.secondary,
        boxShadow: "0 0 10 rgba(0,0,0,0.1)",
        marginBottom: 20,
        padding: 20,
        flex: 1,
        gap: 20,
        
        borderRadius: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: 900,
    },

    flag: {
        padding: 8,
        color: themas.colors.secondary,
        flex: 1,
        borderRadius: 20,
          textAlign: "center",
          fontWeight: "bold",
          textTransform: "uppercase",
    },
    
    info: {
        width: 300,
    }


})

