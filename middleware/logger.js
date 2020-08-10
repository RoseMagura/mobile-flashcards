import { logger } from 'react-native-logger'

const logger = (store) => (next) => (action) => {
    logger.group(action.type)
        logger.log('The action: ', action)
        const returnValue = next(action)
        logger.log('The new state: ', store.getState())
    logger.groupEnd()
    return returnValue
}

export default logger