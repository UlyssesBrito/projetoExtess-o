import React, { useState } from 'react';
import { Text, View, Image,TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from '../../global/themes';
import { Input } from '../../compenents/input';
import { styles } from '../../compenents/input/style';
import { Button } from '../../compenents/Button';
import{useNavigation, NavigationProp} from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword,setShowPassword]=useState(true);
    const [loading,setLoading] = useState(false)


    async function getLogin(){
        try {
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Ateção','Informe os campos obrigatorios')
            }
            

            if(email == 'a' && password == 'a'){
                Alert.alert('Logado com sucesso')
                navigation.reset({routes: [{name: "BottomRoutes"}]})
            }else{
                Alert.alert('Email ou Senha invalidas')
            }
            
            setLoading(false)


            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Flash Checkout</Text>
            </View> 
            <View style={style.boxMid}>
                <Input
                    value={email}
                    autoComplete="email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    title="Endereço de Email"
                    IconRigth={MaterialIcons}
                    IconRigthName='email' 
                />
                 <Input
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    IconRigth={Octicons}
                    IconRigthName={showPassword?'eye-closed': 'eye' }
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            </View>  
            <View style={style.boxBottom}>
                <Button 
                    text='ENTRAR'
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>    
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>         
        </View>
    )
}