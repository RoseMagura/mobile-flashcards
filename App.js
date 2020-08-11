import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setLocalNotification } from './utils/helpers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider } from 'react-redux';
import store from './store';
import { getDecks } from './utils/helpers';
import {  AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

const Tabs = createMaterialTopTabNavigator();

const TabNav = () => (
    <Tabs.Navigator>
        <Tabs.Screen
            name="Decks"
            component={DeckList}
            options={{ tabBarLabel: 'Decks' }}
        />
        <Tabs.Screen name="Add Deck" component={AddDeck} />
    </Tabs.Navigator>
);

export default class App extends Component {
    componentDidMount() {
        setLocalNotification();
        getDecks();
    }
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer style={styles.container}>
                    <Stack.Navigator initialRouteName="TabNav">
                        <Stack.Screen
                            name="Home"
                            component={TabNav}
                            options={{ headerShown: true }}
                            style={{backgroundColor: 'red'}}
                        />
                        <Stack.Screen name="Deck" component={Deck} 
                            options={({ route }) => ({title: route.params.name})}/>
                        <Stack.Screen name="Add Card" component={AddCard} />
                        <Stack.Screen name="Quiz" component={Quiz} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
