import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class AddDeck extends Component {
    state = {
        title: '',
    };
    createDeck = () => {
        const { navigation } = this.props;
        // send to DB
        this.props.dispatch(
            addDeck({
                [this.state.title]: {
                    title: this.state.title,
                    cards: [],
                },
            })
        );
        // redirect to new deck
        navigation.navigate('Deck', { name: this.state.title, cards: 0 });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    What is the title of your new deck?
                </Text>
                <View>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(text) => this.setState({ title: text })}
                        defaultValue="Deck Title"
                    />
                    <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="#DDDDDD"
                        onPress={() => this.createDeck()}
                    >
                        <Text>Create Deck</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30,
    },
    title: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        padding: 20,
    },
    textbox: {
        height: 40,
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});
function mapStateToProps(state) {
    const { store, dispatch } = state;
    return {
        store,
        dispatch,
    };
}
export default connect(mapStateToProps)(AddDeck);
