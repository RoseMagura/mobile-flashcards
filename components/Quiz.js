import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    getDailyReminderValue,
    clearLocalNotification,
    setLocalNotification,
} from '../utils/helpers';

class Quiz extends Component {
    state = {
        questionShowing: true,
        cardNo: 1,
        correct: 0,
    };
    setComplete = () => {
        clearLocalNotification().then(setLocalNotification)
    }
    toNext = (answer) => {
        const { cardNo, correct } = this.state;
        this.setState({
            questionShowing: true,
            cardNo: cardNo + 1,
        });
        answer && this.setState({ correct: correct + 1 });
    };
    toDeck = () => {
        const { navigation } = this.props;
        navigation.navigate('Deck');
    };
    restart = () => {
        this.setState({
            questionShowing: true,
            cardNo: 1,
            correct: 0,
        });
    };
    render() {
        const { cards } = this.props.route.params;
        const { questionShowing, cardNo } = this.state;
        const cardsLength = cards.length;
        let questions = [];
        let answers = [];
        cards.map((card) => {
            questions.push(card['question']);
            answers.push(card['answer']);
        });

        return cardNo <= cardsLength ? (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {cardNo}/{cardsLength}
                </Text>
                {questionShowing ? (
                    <View>
                        <Text style={styles.text}>
                            {cardNo - 1 < cardsLength && questions[cardNo - 1]}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ questionShowing: false })
                            }
                        >
                            <Text style={styles.text}>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text style={styles.text}>
                            {cardNo - 1 < cardsLength && answers[cardNo - 1]}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ questionShowing: true })
                            }
                        >
                            <Text style={styles.text}>Show Question</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TouchableOpacity 
                    onPress={() => this.toNext(true)}
                    style={styles.correct}>
                    <Text style={styles.text}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.toNext(false)}
                    style={styles.incorrect}>
                    <Text style={styles.text}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        ) : cardsLength === 0 ? (
            <View>
                <Text style={styles.text}>
                    Sorry, you cannot take a quiz because there are no cards in
                    the deck.
                </Text>
                <TouchableOpacity onPress={() => this.toDeck()}>
                    <Text style={styles.text}>Return To Deck</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <View>
                <Text style={styles.text}>
                    You finished studying all of the cards.{'\n'}
                    Good job! You got {this.state.correct} correct!
                    {this.setComplete()}
                </Text>
                <TouchableOpacity onPress={() => this.restart()}>
                    <Text style={styles.text}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toDeck()}>
                    <Text style={styles.text}>Return To Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        margin: 20
    },
    // correct: {
    //     backgroundColor: 'green'
    // },
    // incorrect: {
    //     backgroundColor: 'red'
    // }
});

export default Quiz;
