import {combineReducers} from 'redux';
import DogReducer from './reducer-dogs';
import ActiveDogReducer from './reducer-active-dog';

const allReducers = combineReducers({
    dogs: DogReducer,
    activeDog: ActiveDogReducer
});

export default allReducers;