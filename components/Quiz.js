import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Quiz extends Component {
    state = {
        questionShowing: true,
        cardNo: 1,
        correct: 0
    };
    toNext = (answer) => {
        const { cardNo, correct } = this.state;
        this.setState({
                        questionShowing: true, 
                        cardNo: cardNo + 1
                    })
        answer && this.setState({correct: correct + 1})            
    }
    toDeck = () => {
        const { navigation } = this.props
        navigation.navigate('Deck')
    }
    restart = () => {
        this.setState({
            questionShowing: true,
            cardNo: 1,
            correct: 0
        })
    }
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
        
        return(cardNo <= cardsLength ? <View>
                <Text>
                    {cardNo}/{cardsLength}
                </Text>
                {questionShowing ? (
                    <View>
                        <Text>
                            {cardNo - 1 < cardsLength && 
                            questions[cardNo - 1]}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ questionShowing: false })
                            }
                        >
                            <Text>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text>
                            {cardNo - 1 < cardsLength && 
                            answers[cardNo - 1]}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ questionShowing: true })
                            }
                        >
                            <Text>Show Question</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TouchableOpacity onPress={() => this.toNext(true)}>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toNext(false)}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
            : cardsLength === 0 
                ? 
                    <View>
                        <Text>
                            Sorry, you cannot take a quiz because
                            there are no cards in the deck.    
                        </Text> 
                        <TouchableOpacity onPress={() => this.toDeck()}>
                            <Text>
                                Return To Deck
                            </Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View>
                        <Text>
                            You finished studying all of the cards.{'\n'}
                            Good job! You got {this.state.correct}{' '}
                            correct!
                        </Text>
                        <TouchableOpacity onPress={() => this.restart()}>
                            <Text>
                                Restart Quiz
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toDeck()}>
                            <Text>
                                Return To Deck
                            </Text>
                        </TouchableOpacity>
                    </View>
        );
    }
}

export default Quiz;
