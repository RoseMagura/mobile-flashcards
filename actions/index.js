export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const HANDLE_INITIAL_DATA = 'HANDLE_INITIAL_DATA';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
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
        deck,
    };
}

export function handleInitialData(data) {
    return {
        type: HANDLE_INITIAL_DATA,
        data,
    };
}
