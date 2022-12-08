import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from './FavoriteNavigation'
import AccountNavigation from './AccountNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({color, size})=> (
          <Icon name="heart" color={color} size={size} />
        ),
        headerShown: false
      }}/>
      <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        tabBarLabel: "Pokedex",
        tabBarIcon: ({color, size})=> (
          <Icon name="baseball-ball" color={color} size={size} />
        ),
        headerShown: false
      }}/>
      <Tab.Screen name="Account" component={AccountNavigation} options={{
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({color, size})=> (
          <Icon name="user" color={color} size={size} />
        ),
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}