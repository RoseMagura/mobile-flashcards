import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Card from './components/Card';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()

const Tabs = createMaterialTopTabNavigator();

const TabNav = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Decks" component={DeckList} 
            options={{tabBarLabel: 'Decks'}}
            />
        <Tabs.Screen name="Add Deck" component={AddDeck} />
    </Tabs.Navigator>
    )

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="TabNav">
            <Stack.Screen 
                    name="Home" 
                    component={TabNav}
                    options={{headerShown: true}}
                    />
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="Add Card" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
