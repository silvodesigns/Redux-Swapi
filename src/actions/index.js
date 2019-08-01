import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/range';


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

//actions describe what happened in the UI

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// our action creator will be a function that returns a function

//REDUX THUNK
export const getInfo = () => dispatch => {//ACTION CREATOR
    dispatch({type:FETCH_START});//WHAT IS THIS LINE DOING?
    axios//ACTION
        .get('https://swapi.co/api/people/')
        .then(res =>
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        )
        .catch(err=>dispatch({type: FETCH_FAIL, payload:err}))
};
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
