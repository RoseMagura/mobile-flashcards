import React, { Component } from 'react';
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deleteDeck } from '../actions';
import { deleteFromAsync } from '../utils/helpers';

class Deck extends Component {
    addCard = () => {
        const { navigation } = this.props;
        navigation.navigate('Add Card', { deck: this.props.route.params.name });
    };
    startQuiz = () => {
        const { navigation, state } = this.props;
        const { name } = this.props.route.params;
        const cards = state['decks'][name]['cards'];
        navigation.navigate('Quiz', { cards: cards });
    };
    deleteDeck = () => {
        const { name } = this.props.route.params;
        const { navigation } = this.props;
        Alert.alert(
            'Deleting',
            `Are you sure you want to delete ${this.props.route.params.name}? `,
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        this.props.dispatch(deleteDeck(name));
                        deleteFromAsync(name);
                        navigation.navigate('Home');
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ]
        );
    };
    render() {
        const { state } = this.props;
        const { name } = this.props.route.params;
        const cards =
            state['decks'][name] !== undefined && state['decks'][name]['cards'];
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>
                    {cards !== null && cards.length} Cards
                </Text>
                <TouchableOpacity onPress={() => this.addCard()}>
                    <Text style={styles.text}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.startQuiz()}>
                    <Text style={styles.text}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteDeck()}>
                    <Text style={[styles.text, { color: '#990033' }]}>
                        Delete Deck
                    </Text>
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
        margin: 10,
    },
});
function mapStateToProps(state) {
    const { dispatch } = state;
    return { state, dispatch };
}
export default connect(mapStateToProps)(Deck);
