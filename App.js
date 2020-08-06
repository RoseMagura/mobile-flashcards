import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Question from './components/Question';
import AddQuestion from './components/AddQuestion';
import AddDeck from './components/AddDeck';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
       <Stack.Navigator initialRouteName="DeckList">
           <Stack.Screen name="Decks" component={DeckList} />
           <Stack.Screen name="Deck" component={Deck} />
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
