import {
    RECEIVE_DECKS,
    ADD_DECK,
    DELETE_DECK,
    ADD_CARD_TO_DECK
} from '../actions';

export default function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS : 
            return {
                ...state
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.deck
            }
        case DELETE_DECK : 
            return Object.keys(state)
                .filter(deck => deck !== action.deck)
        case ADD_CARD_TO_DECK :
            return {
                ...state,
                // [JSON.stringify(action.deck)]: {
                    [action.deck]: {
                    title: action.deck,
                    cards: 
                        state[action.deck]['cards'].concat([action.card])
                }

            }
        default :
            return state   
    }
}