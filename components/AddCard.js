import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    };
    submit = () => {
        // send to DB instead
        alert(` Submitting: question: ${this.state.question}, 
        answer: ${this.state.answer}`);
        //navigate back to deck
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textbox}
                    onChangeText={(text) => this.setState({ question: text })}
                    defaultValue="Question"
                />
                <TextInput
                    style={styles.textbox}
                    onChangeText={(text) => this.setState({ answer: text })}
                    defaultValue="Answer"
                />
                <TouchableOpacity onPress={() => this.submit()}>
                    <Text style={{fontSize: 20}}>
                        Submit
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
        marginTop: 50,
    },
    textbox: {
        height: 40,
        width: 100,
        backgroundColor: '#DDDDDD',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        margin: 5
    },
});

export default AddCard;
