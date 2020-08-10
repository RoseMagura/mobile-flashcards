import React, { Component } from 'react';
import { 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';
import { addCardToDeck } from '../actions'; 
import { connect } from 'react-redux'; 

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    };
    submit = () => {
        // send to DB
        const deck = this.props.route.params['deck']
        // alert(this.props.route.params['deck'])
        this.props.dispatch(addCardToDeck(
            // question: this.state.question,
            // answer: this.state.answer,
           {question: this.state.question,
                    answer: this.state.answer,},
            deck
        ))
        
        //navigate back to deck
        const { navigation } = this.props;
        navigation.navigate('Deck');
    };
    render() {
        const { info } = this.props.route.params
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props.route.params['deck'])}</Text>
                <Text>{JSON.stringify(
                    this.props.state['decks']
                        [this.props.route.params['deck']])}
                </Text>
                {/* <Text>{JSON.stringify(this.props.state['decks']['Deck']['title'])}</Text> */}
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

function mapStateToProps (state) {
    // const key = timeToString()
    return {
        state
    }
}
 
export default connect(mapStateToProps)(AddCard)
