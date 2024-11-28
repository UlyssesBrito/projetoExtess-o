import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


const buttonSize = 90;

export const  styles = StyleSheet.create({
    tabArea:{
        borderTopWidth: 2,
        borderColor: themas.colors.ligthGray,
        flexDirection:'row',
        height:80,
        width: "100%",
        justifyContent:'space-around',
    },
    tabItem:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },

    tabItemButton: {
        padding: 25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: themas.colors.blue400,
        width: buttonSize,
        transform: [{translateY: "-50%"}],
        height: buttonSize,
        borderRadius: "50%"
    }

})