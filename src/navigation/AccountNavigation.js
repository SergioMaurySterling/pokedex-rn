import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} options={{title: "Mi cuenta"}}/>
    </Stack.Navigator>
  )
}

export default AccountNavigation