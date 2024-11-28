import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
export const  styles = StyleSheet.create({
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.bgScreen,
        borderColor:themas.colors.ligthGray
    },
    input:{
        height:'100%',
        width:'90%',
        //backgroundColor:'red',
        borderRadius:40,
        paddingLeft:5,
        backgroundColor:themas.colors.bgScreen      
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20
    },
    Icon:{
        width:'100%'
    },
    Button:{
        width:'10%'
    }
})