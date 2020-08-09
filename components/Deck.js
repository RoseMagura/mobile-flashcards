import React from 'react';
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Deck({ route, navigation }) {
    const { name, cards } = route.params;
    // replace with data from AsyncStorage
    const cardArray = [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
        },
    ];
    function addCard(navigation) {
        navigation.navigate('Add Card');
    }
    function startQuiz(navigation) {
        navigation.navigate('Quiz', { cards: cardArray });
    }
    function deleteDeck() {
        Alert.alert(
            'Deleting',
            'Are you sure you want to delete this ' + 'deck?',
            [
                // To do: replace alert with helper function
                { text: 'Yes', onPress: () => alert('DELETE') },
                { text: 'Cancel', style: 'cancel' },
            ]
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{cards} Cards</Text>
            <TouchableOpacity onPress={() => addCard(navigation)}>
                <Text style={styles.text}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => startQuiz(navigation)}>
                <Text style={styles.text}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteDeck()}>
                <Text style={styles.text}>Delete Deck</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        margin: 10
    }
});