import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

import{NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
 
});
