import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login"; // Certifique-se de que o caminho está correto
import BottomRoutes from "./bottom.routes"; // Certifique-se de que o caminho está correto

export default function Routes() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator
            initialRouteName="Login" // Define a tela inicial como "Login"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "#FFF" },
            }}
        >
            {/* Tela Login */}
            <Stack.Screen
                name="Login"
                component={Login}
            />
            
            {/* Rotas inferiores */}
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
        </Stack.Navigator>
    );
}
