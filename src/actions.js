import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data.results.map((user, i) => ({...user, id: i+1})) }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}