import { applyMiddleware } from 'redux'
import logging from './logging'

export default applyMiddleware(
    logging,
)
