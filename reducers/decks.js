import {
    RECEIVE_DECKS,
    ADD_DECK,
    DELETE_DECK,
    ADD_CARD_TO_DECK,
    HANDLE_INITIAL_DATA
} from '../actions';

export default function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS : 
            return {
                ...state,
                ...action.decks
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
                    [action.deck]: {
                    title: action.deck,
                    cards: 
                        state[action.deck]['cards'].concat([action.card])
                }

            }
        case HANDLE_INITIAL_DATA :
            return {
                ...state,
                ...action.data['decks']
                // [decks]: {...action.data}
            } 
        default :
            return state   
    }
}