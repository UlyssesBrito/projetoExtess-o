import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal:37
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: 'white',
        //justifyContent:'center',
        alignItems:'center',
        
    },
    logo: {
        width: 180, // Apenas o valor numérico
        height: undefined, // Deixe o React Native calcular a altura automaticamente para manter a proporção
        aspectRatio: 1, // Defina uma proporção, por exemplo 1 para manter quadrada ou a proporção original da imagem
        resizeMode: 'contain' // Equivalente ao object-fit: contain
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:40,
    },
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        paddingHorizontal:10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray
    }
});
