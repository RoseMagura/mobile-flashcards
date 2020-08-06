import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Deck extends Component {
  render() {
    //   const { name, cards } = this.props
    return (
        <View>
            <Text>Deck</Text>
            {/* <Text>{name}</Text>
            <Text>{cards} Cards</Text> */}
        </View>
    );
  }
}

export default Deck
