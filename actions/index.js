export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export function receiveDecks() {
    return {
        type: RECEIVE_DECKS,
    };
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    };
}

export function deleteDeck(deck) {
    return {
        type: DELETE_DECK,
        deck,
    };
}

export function addCardToDeck(card, deck) {
    return {
        type: ADD_CARD_TO_DECK,
        card,
        deck
    }
}