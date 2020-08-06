import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default function Deck ({ route, navigation }){    
    const { name, cards } = route.params
    function addCard (navigation) {
        navigation.navigate('Add Card')
    }
    function startQuiz (navigation) {
        alert('starting quiz')
        // navigate to quiz page
    }
    function deleteDeck () {
        alert('deleting')
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
