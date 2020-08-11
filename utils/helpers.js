import {  AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import { handleInitialData } from '../actions';
import * as Permissions from 'expo-permissions';
import store from '../store';
import { logger } from 'react-native-logger';

//Set up notification functionality
const NOTIFICATION_KEY = 'Flashcards:notifications'; //What is this doing?

export function getDailyReminderValue() {
    return {
        today: "Don't forget to study today!",
    };
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

export function createNotification() {
    return {
        title: 'Study Time',
        body: "Don't forget to study today!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        },
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(
                    ({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(12);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(
                                NOTIFICATION_KEY,
                                JSON.stringify(true)
                            );
                        }
                    }
                );
            }
        });
}


const STORAGE_KEY = 'myKey'
logger.log(`state from store: ${JSON.stringify(store.getState())}`);
store.subscribe(() => AsyncStorage.setItem(
  STORAGE_KEY,JSON.stringify(store.getState())
  )
)
// checking the async storage for previous stored data
export function getDecks() {
    AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse).then((data) => {
        // logger.log(data)
        store.dispatch(handleInitialData(data))
})}
// is name the same as key? 
export function deleteFromAsync (deck) {
    AsyncStorage.removeItem(deck)
}

// function getDeck (name) {

// }
// function saveDeckTitle (title) {

// }

// function addCardToDeck (card, deck) {

// }