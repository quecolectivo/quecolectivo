import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'

export const updateOriginValue = createAction(mutations.UPDATE_ORIGIN_VALUE, (value) => value )
export const updateDestinationValue = createAction(mutations.UPDATE_DESTINATION_VALUE, (value) => value )