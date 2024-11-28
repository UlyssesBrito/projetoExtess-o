import React from "react";
import { Text, TouchableOpacity, View} from "react-native";
import { styles } from "./style";

import {AntDesign, FontAwesome, Entypo, MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";


export default({state,navigation})=>{
    console.log(navigation)
    const changeView = (screenName: string) => {
        navigation.navigate(screenName);
    }
    return (   
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={() => changeView("List")}>
                <FontAwesome
                    name="bars"
                    style={{fontSize:32, color: (state.index === 0 ? themas.colors.blue400 : themas.colors.ligthGray)}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItemButton}>
                <FontAwesome
                    name="plus"
                    style={{fontSize:32, color: themas.colors.secondary, width: "100%"}}
                />
                <FontAwesome
                    name="pencil"
                    style={{fontSize:30, color: themas.colors.secondary, width: "100%", textAlign: "right"}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => changeView("User")}>
                <FontAwesome
                    name="user"
                    style={{fontSize:32, color: (state.index === 1 ? themas.colors.blue400 : themas.colors.ligthGray)}}
                />
            </TouchableOpacity>

        </View>

    )
}
