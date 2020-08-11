import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DeckList extends Component {
    linkToDeck(name, cards) {
        const { navigation } = this.props;
        navigation.navigate('Deck', { name: name, cards: cards });
    }
    render() {
        const { state } = this.props;
        const decks = state['decks'];
        return (
            <View style={styles.container}>
                <Text>State: {JSON.stringify(state)}</Text>
                {Object.values(decks).length > 0  ? (
                    Object.values(decks).map((deck) => {
                        return (
                            <View key={deck['title']}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.linkToDeck(
                                            deck['title'],
                                            deck['cards']
                                        )
                                    }
                                >
                                    <Text style={{ fontSize: 60 }}>
                                        {deck['title']}
                                    </Text>
                                    <Text>{deck['cards'] !== undefined 
                                    && deck['cards'].length} cards</Text>
                                </TouchableOpacity>
                             </View> 
                        );
                    })
                ) : (
                    <Text>No decks found. Please create one.</Text>
                )}
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

function mapStateToProps(state) {
    const { dispatch } = state;
    return {
        state,
        dispatch,
    };
}

export default connect(mapStateToProps)(DeckList);
