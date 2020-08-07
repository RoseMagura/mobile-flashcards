import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'

class AddDeck extends Component {
    state = {
        title: ''
    }
    createDeck = () => {
        // send to DB
        alert(`Creating ${this.state.title}`)
        // redirect to new deck
    }
  render() {
    return (
        <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
        style={{height: 40}}
        onChangeText={text => this.setState({title: text})}
        defaultValue='Deck Title'/>
        <TouchableHighlight onPress={() => this.createDeck()}>
            <Text>
                Create Deck
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AddDeck
