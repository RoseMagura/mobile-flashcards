import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Deck from './Deck'
import AddCard from './AddCard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

class DeckList extends Component {
    linkToDeck(name, cards) {
        const { navigation } = this.props
        navigation.navigate('Deck', {name: name, cards: cards})
    }    
  render() {
    const decks = [
                    {name: 'A', cards: 9}, 
                    {name: 'B', cards: 20}, 
                    {name: 'C', cards: 300}]  
    return (
            <View style={styles.container}>
                {decks.map((deck) => {
                    return(
                        <View key={deck['name']}>
                            <TouchableOpacity
                                onPress={() => this.linkToDeck(
                                    deck['name'], deck['cards'])}>
                                <Text style={{fontSize: 60}}>
                                    {deck['name']}
                                </Text>
                                <Text>
                                    {deck['cards']} cards
                                </Text>
                            </TouchableOpacity>
                        </View>    
                    )
                })} 
            </View>  
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,  
    },
  });
  
export default DeckList
