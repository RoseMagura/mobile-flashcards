import {
    RECEIVE_DECKS,
    ADD_DECK,
    DELETE_DECK,
    ADD_CARD_TO_DECK,
    HANDLE_INITIAL_DATA,
} from '../actions';
import { logger } from 'react-native-logger';

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK:
            return {
                ...state,
                ...action.deck,
            };
        case DELETE_DECK:
            delete state[action.deck];
            return {
                ...state,
            };
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.deck]: {
                    title: action.deck,
                    cards: state[action.deck]['cards'].concat([action.card]),
                },
            };
        case HANDLE_INITIAL_DATA:
            // can uncomment this for debugging
            // logger.log(`Initial Data from AsyncStorage: ${JSON.stringify(action.data)}`);
            return {
                ...state,
                ...action.data['decks'],
            };
        default:
            return state;
    }
}
