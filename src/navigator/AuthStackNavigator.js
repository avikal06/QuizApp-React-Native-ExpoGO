import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,SignInScreen,SignUpScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default AuthStackNavigator