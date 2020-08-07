import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'

export default function Deck ({ route, navigation }){    
    const { name, cards } = route.params
    // replace with data from AsyncStorage
    const cardArray = [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    function addCard (navigation) {
        navigation.navigate('Add Card')
    }
    function startQuiz (navigation) {
        navigation.navigate('Quiz', {cards: cardArray})
    }
    function deleteDeck () {
        Alert.alert('Deleting', 'Are you sure you want to delete this ' +
        'deck?', [
                    // To do: replace alert with helper function
                    {text: 'Yes', onPress: () => alert('DELETE')}, 
                    {text: 'Cancel', style: 'cancel'}])
    }
    return (
        <View>
            <Text>{name}</Text>
            <Text>{cards} Cards</Text>
            <TouchableOpacity onPress={() => addCard(navigation)}>
                <Text>
                    Add Card
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => startQuiz(navigation)}>
                <Text>
                    Start Quiz
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteDeck()}>
                <Text>
                    Delete Deck
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
