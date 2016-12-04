import {combineReducers} from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

const defaultState = {
    originValue: '',
    destinationValue: '',
    markers: {
        origin: {lat: -34.921512, lng: -57.954216},
        destination: {lat: -34.931512, lng: -57.944216}
    },
    searchData: {
        results: [
            {
                address_components: [
                    {
                        long_name: '363',
                        short_name: '363',
                        types: [
                            'street_number'
                        ]
                    },
                    {
                        long_name: 'Calle 8',
                        short_name: 'Calle 8',
                        types: [
                            'route'
                        ]
                    },
                    {
                        long_name: 'La Plata',
                        short_name: 'La Plata',
                        types: [
                            'locality',
                            'political'
                        ]
                    },
                    {
                        long_name: 'La Plata',
                        short_name: 'La Plata',
                        types: [
                            'administrative_area_level_2',
                            'political'
                        ]
                    },
                    {
                        long_name: 'Buenos Aires',
                        short_name: 'Buenos Aires',
                        types: [
                            'administrative_area_level_1',
                            'political'
                        ]
                    },
                    {
                        long_name: 'Argentina',
                        short_name: 'AR',
                        types: [
                            'country',
                            'political'
                        ]
                    },
                    {
                        long_name: 'B1902',
                        short_name: 'B1902',
                        types: [
                            'postal_code'
                        ]
                    },
                    {
                        long_name: 'CNO',
                        short_name: 'CNO',
                        types: [
                            'postal_code_suffix'
                        ]
                    }
                ],
                formatted_address: 'Calle 8 363, B1902CNO La Plata, Buenos Aires, Argentina',
                geometry: {
                    bounds: {
                        northeast: {
                            lat: -34.9076964,
                            lng: -57.9616694
                        },
                        southwest: {
                            lat: -34.9077076,
                            lng: -57.9616823
                        }
                    },
                    location: {
                        lat: -34.9077076,
                        lng: -57.9616823
                    },
                    location_type: 'RANGE_INTERPOLATED',
                    viewport: {
                        northeast: {
                            lat: -34.9063530197085,
                            lng: -57.96032686970849
                        },
                        southwest: {
                            lat: -34.9090509802915,
                            lng: -57.9630248302915
                        }
                    }
                },
                partial_match: true,
                place_id: 'EjdDYWxsZSA4IDM2MywgQjE5MDJDTk8gTGEgUGxhdGEsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5h',
                types: [
                    'street_address'
                ]
            }
        ],
        status: 'OK'
    },
    requestSubmitedFrom: 'origin'
}

const tasks = ({
    [mutations.UPDATE_ORIGIN_VALUE] (state, value) {
        return {...state, originValue: value}
    },
    [mutations.UPDATE_DESTINATION_VALUE ] (state, value) {
        return {...state, destinationValue: value}
    },
    [mutations.SUBMIT_DIRECTION_REQUEST] (state, id) {
        return {...state, requestSubmitedFrom: id}
    },
    [mutations.DATA_RECIEVED] (state, data) {
        return {...state, searchData: data}
    },
    [mutations.UPDATE_DESTINATION_MARKER] (state, location) {
        let newState = { ...state }
        newState.markers.destination = location
        return newState
    },
    [mutations.UPDATE_ORIGIN_MARKER] (state, location) {
        let newState = { ...state }
        newState.markers.origin = location
        return newState
    }
})

const globalReducer = (state = defaultState, action) => tasks.hasOwnProperty(action.type) ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
    global: globalReducer,
    routing: routerReducer
})

export default rootReducer
