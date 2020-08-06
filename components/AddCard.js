import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    submit = () => {
        // send to DB instead
        alert(` Submitting: question: ${this.state.question}, 
        answer: ${this.state.answer}`)
        //navigate back to deck
    }
  render() {
    return (
        <View>
            <TextInput
                style={{height: 40}}
                onChangeText={text => this.setState({question: text})}
                defaultValue='Question'/>
            <TextInput
                style={{height: 40}}
                onChangeText={text => this.setState({answer: text})}
                defaultValue='Answer'/>    
            <TouchableOpacity onPress={() => this.submit()}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>    
            {/* <Text>
               Submitting: question: {this.state.question}, 
               answer: {this.state.answer}
            </Text> */}
        </View>
    );
  }
}

export default AddCard
